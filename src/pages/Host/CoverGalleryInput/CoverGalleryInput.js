import React, { useRef, useState } from "react";
import { useConfirm } from "../../../utils.js/useConfirm";
import { toast } from "react-toastify";
import CoverGalleryImg from "../CoverGalleryImg/CoverGalleryImg";
import Button from "../components/Button";
import axios from "axios";
import * as S from "./CoverGalleryInput.style";

function CoverGalleryInput({
  selectedCoverGallery,
  setSelectedCoverGallery,
  setVisible,
}) {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  // const [selectedGallery, setSelectedCoverGallery] = useState(null);
  // const [selectedCoverImg, setSelectedCoverImg] = useState(null);
  const [imgBoxList, setImgBoxList] = useState([]);
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const onUploadImgBtnClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  console.log(selectedCoverGallery);
  // const onUploadImg = e => {
  //   if (!e.target.files) {
  //     return;
  //   }
  //   const image = e.target.files[0];
  //   setSelectedCoverGallery(URL.createObjectURL(image));
  // };

  const onSaveBtnClick = () => {
    const formData = new FormData();
    imgBoxList.forEach(image => {
      formData.append("detailImagesUrl", image);
    });

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

  const addImageBox = () => {
    setSelectedCoverGallery(prev => [...prev, []]);
  };

  const deleteWord = () => {
    setVisible();
  };
  const abortWord = () => {
    return;
  };

  const confirmDelete = useConfirm(
    "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?",
    deleteWord,
    abortWord
  );

  return (
    <S.CoverGalleryWrapper>
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
      <S.Grid>
        {selectedCoverGallery.map((file, index) => (
          <S.CoverGalleryImgWrapper key={index} gridColumn={(index % 3) + 1}>
            <CoverGalleryImg
              file={file}
              index={index}
              selectedCoverGallery={selectedCoverGallery}
              setSelectedCoverGallery={setSelectedCoverGallery}
            />
          </S.CoverGalleryImgWrapper>
        ))}
      </S.Grid>

      <S.CoverAddBtnContainer onClick={addImageBox}>
        <S.AddBtnSection>
          <S.CoverAddBtn
            src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
            alt="추가 버튼"
          />
          <S.CoverAddText>커버 추가하기</S.CoverAddText>
        </S.AddBtnSection>
      </S.CoverAddBtnContainer>

      <Button
        setIsActive={setIsActive}
        confirmDelete={confirmDelete}
        isActive={isActive}
        onSaveBtnClick={onSaveBtnClick}
        notify={notify}
      />
    </S.CoverGalleryWrapper>
  );
}

export default CoverGalleryInput;
