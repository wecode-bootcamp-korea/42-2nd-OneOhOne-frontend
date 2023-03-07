import Slider from "react-slick";
import styled from "styled-components/macro";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  background-color: transparent;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 800px;
  max-width: 900px;
  padding: 20px;
`;
export const SliderContainer = styled.div`
  padding: 10px;
`;
export const ThumbnailSlider = styled(Slider)`
  .slick-prev {
    left: 1px;
    z-index: 1;
  }

  .slick-next {
    right: 19px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
    font-size: 40px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: black;
  }
`;
export const NumBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 200%;
  color: white;
`;
export const ImgNum = styled.div`
  font-weight: 800;
`;
export const ImgLength = styled.div``;
export const ExitBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  font-size: 120%;
  font-weight: 600;
  right: 5px;
  top: 7px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
export const ImageBox = styled.div`
  margin: auto;
  width: 700px;
  height: 550px;
`;
export const Images = styled.img`
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
`;
