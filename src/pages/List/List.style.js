import styled from "styled-components";
import Slider from "react-slick";

export const MainCarouselDiv = styled.div`
  margin-bottom: 85px;
`;

export const SlideBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
`;
export const SlideBtn = styled.img`
  width: 17px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ListCategoryImg = styled.img`
  width: 376px;
  height: 221px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.08);
    border-radius: 10px;
    cursor: pointer;
  }
`;
export const ListCategorySmallImg = styled.img`
  position: absolute;
  top: 15px;
  right: 28px;
  width: 30px;
  height: 30px;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: pink;
    border-radius: 50%;
    transform: scale(1.4);
    transition: transform 0.3s ease-in-out;
  }
`;

export const ListImgDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ListTxtDiv = styled.div`
  padding-left: 15px;
  margin-top: 10px;
  margin-bottom: 90px;
  cursor: pointer;
`;

export const ListTxtName = styled.h1`
  font-size: 13px;
  font-weight: bold;
`;

export const ListTxtDescription = styled.h1`
  color: #1a1a1a;
  font-size: 16px;
  margin-top: 5px;
`;

export const ListTxtPrice = styled.h1`
  font-size: 15px;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid lightgray;
  width: 95%;
  font-weight: bold;
`;

export const ListCategoryTitle = styled.h1`
  /* margin-top: 100px; */
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
`;

export const SeeAllClassDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 99%;
  margin-bottom: 15px;
  color: #a2a2a2;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    color: black;
    font-size: 23px;

    display: flex;
    margin-top: -50px;
  }

  .slick-prev::before {
    content: "❮";
  }

  .slick-next::before {
    content: "❯";
  }
`;

export const BottomBannerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const BottomBanner = styled.div`
  width: 1200px;
  height: 150px;
  padding-top: 60px;
  background-color: #ff5d00;
  border-radius: 10px;
`;

export const BottomBannerTxt = styled.div`
  color: white;
  margin-left: 50px;
  margin-right: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const BottomBannerTxtSpan = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
