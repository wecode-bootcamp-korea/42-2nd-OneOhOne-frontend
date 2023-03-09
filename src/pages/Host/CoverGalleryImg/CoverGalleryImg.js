import React, { useRef, useState } from "react";
import * as S from "./CoverGalleryImg.style";

function CoverGalleryImg({
  file,
  selectedCoverGallery,
  setSelectedCoverGallery,
  index,
}) {
  const inputRef = useRef(null);
  // const [selectedCoverImg, setSelectedCoverImg] = useState(null);
  // const [selectedCoverGallery, setSelectedCoverGallery] = useState(null);
  const onUploadImgBtnClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  console.log("img", file[0]);

  const onUploadImg = e => {
    if (!e.target.files) {
      return;
    }
    const newArr = [...selectedCoverGallery];
    newArr[index] = [e.target.files[0]];
    setSelectedCoverGallery(newArr);
    // const image = e.target.files[0];
    // setSelectedCoverGallery(URL.createObjectURL(image));
  };

  // console.log(URL.createObjectURL(selectedCoverGallery));
  return (
    <div>
      {file[0] ? (
        <img
          src={URL.createObjectURL(file[0])}
          // src={src}
          alt="커버 갤러리 이미지"
          style={{
            width: "191.25px",
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
