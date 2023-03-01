import React, { useRef, useState } from "react";
import * as S from "./CoverGalleryImg.style";

function CoverGalleryImg() {
  const inputRef = useRef(null);
  const [selectedCoverImg, setSelectedCoverImg] = useState(null);

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

  return (
    <div>
      {selectedCoverImg ? (
        <img
          src={selectedCoverImg}
          alt="커버 갤러리 이미지"
          style={{
            maxWidth: "100%",
            height: "191.25px",
            display: "block",
            objectFit: "cover",
          }}
        />
      ) : (
        <S.ImgAddContainer onClick={onUploadImgBtnClick}>
          <S.ImgAddIcon src="https://cdn-icons-png.flaticon.com/128/4131/4131814.png" />
          <S.ImgAddBtn
            multiple={false}
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImg}
          />
        </S.ImgAddContainer>
      )}
    </div>
  );
}

export default CoverGalleryImg;
