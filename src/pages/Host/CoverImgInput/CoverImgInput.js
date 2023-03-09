import axios from "axios";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import * as S from "./CoverImgInput.style";
import { useConfirm } from "../../../utils.js/useConfirm";

function CoverImgInput({
  selectedCoverImg,
  setSelectedCoverImg,
  visible,
  setVisible,
  setDisplayImgAddTitleInput,
  onUploadImg,
}) {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const [displayCoverImgContainer, setDisplayCoverImgContainer] =
    useState("flex");
  const [imgSave, setImgSave] = useState(false);

  const notify = () => toast.success("성공적으로 저장되었습니다.");
  const deleteWord = () => {
    setVisible(false);
  };
  const abortWord = () => {
    return;
  };
  const confirmDelete = useConfirm(
    "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?",
    deleteWord,
    abortWord
  );

  const onUploadImgBtnClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const onSaveBtnClick = () => {
    setImgSave(!imgSave);
    const formData = new FormData();
    formData.append("lectureMainImageUrl", selectedCoverImg);

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

    setVisible(false);
  };

  return (
    <S.CoverImgContainer visible={visible}>
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

      {selectedCoverImg ? (
        <img
          src={selectedCoverImg}
          alt="커버 이미지"
          style={{
            maxWidth: "100%",
            height: "208px",
            display: "block",
            objectFit: "cover",
          }}
        />
      ) : (
        <S.ImgAddContainer onClick={onUploadImgBtnClick}>
          <S.ImgAddIcon src="https://cdn-icons-png.flaticon.com/128/4131/4131814.png" />
          <S.ImgAddText>이미지를 첨부해주세요.</S.ImgAddText>
          <S.ImgAddBtn
            multiple={false}
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImg}
          />
        </S.ImgAddContainer>
      )}

      <Button
        setIsActive={setIsActive}
        confirmDelete={confirmDelete}
        isActive={isActive}
        onSaveBtnClick={onSaveBtnClick}
        notify={notify}
      />
    </S.CoverImgContainer>
  );
}

export default CoverImgInput;
