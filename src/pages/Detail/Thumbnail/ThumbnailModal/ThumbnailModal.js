import React from "react";
import * as S from "./ThumbnailModal.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ThumbnailModal = ({ imgUrl, modalOpen, handleModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!modalOpen) return;

  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.SliderContainer>
          <S.ExitBtn onClick={handleModal}>X 닫기</S.ExitBtn>
          <S.ThumbnailSlider {...settings}>
            {imgUrl.map(data => (
              <>
                <S.NumBox>
                  <S.ImgNum>{data.detailImageSequence}</S.ImgNum>
                  <S.ImgLength>|{imgUrl.length}</S.ImgLength>
                </S.NumBox>
                <S.ImageBox key={data.detailImageSequence}>
                  <S.Images src={data.detailImageUrl} alt="thumbnail" />
                </S.ImageBox>
              </>
            ))}
          </S.ThumbnailSlider>
        </S.SliderContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};
