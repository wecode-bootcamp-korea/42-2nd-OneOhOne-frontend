import axios from "axios";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./CoverImgUploaded.style";

function CoverImgInput() {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const [selectedCoverImg, setSelectedCoverImg] = useState(null);
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const onUploadImgBtnClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const onUploadImg = e => {
    if (!e.target.files) {
      return;
    }
    const image = e.target.files[0];
    setSelectedCoverImg(URL.createObjectURL(image));
  };

  const onSaveBtnClick = () => {
    const formData = new FormData();
    formData.append("image", selectedCoverImg);

    axios({
      baseURL: "http://localhost:8080",
      url: "/upload",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <S.CoverImgContainer>
      <S.CoverImgDescription>
        커버 이미지는 홈페이지의 메인 페이지에서 보이는 썸네일 이미지입니다.
        크리에이터님과 작품을 잘 대표하는 사진일수록 좋습니다.
      </S.CoverImgDescription>

      <S.RestrictedImgContainer>
        <S.RestrictedImgTitleContainer>
          <S.ImgInfoIcon src="https://cdn-icons-png.flaticon.com/128/64/64494.png" />
          <S.RestrictedImgTitle>
            아래와 같은 이미지는 사용을 제한합니다.
          </S.RestrictedImgTitle>
        </S.RestrictedImgTitleContainer>
        <S.RestrictedImgDetail>
          <li>저작권, 초상권을 침해하는 이미지 (ex.기업 로고)</li>
          <li>유해, 음란, 차별, 폭력을 조장하는 이미지</li>
          <li>텍스트가 삽입된 이미지</li>
        </S.RestrictedImgDetail>
      </S.RestrictedImgContainer>

      <S.RecommendImgContainer>
        <S.RecommendImgTitleContainer>
          <S.ImgInfoIcon src="https://cdn-icons-png.flaticon.com/128/64/64494.png" />
          <S.RecommendImgTitle>어떤 이미지가 좋을까요?</S.RecommendImgTitle>
        </S.RecommendImgTitleContainer>
        <S.RecommendImgDetail>
          <li>4:3 비율의 PNG, JPG, GIF 파일 형식으로 추천드립니다.</li>
          <li>이미지는 최대 5MB 까지 업로드 가능합니다.</li>
        </S.RecommendImgDetail>
      </S.RecommendImgContainer>

      <S.CoverImg src={selectedCoverImg} alt="커버 이미지" />

      <S.BtnSection>
        <S.BtnContainer>
          <S.BackBtn
            onClick={() => {
              setIsActive(!isActive);
              alert(
                "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?"
              );
            }}
            isActive={isActive}
          >
            취소하기
          </S.BackBtn>
          <S.SubmitBtn
            type="button"
            onClick={() => {
              onSaveBtnClick();
              notify();
            }}
          >
            저장하기
            <ToastContainer
              position="top-center"
              hideProgressBar="true"
              autoClose="1000"
            />
          </S.SubmitBtn>
        </S.BtnContainer>
      </S.BtnSection>
    </S.CoverImgContainer>
  );
}

export default CoverImgInput;
