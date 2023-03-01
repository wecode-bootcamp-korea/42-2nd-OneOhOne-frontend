import styled, { css } from "styled-components";

export const CoverGalleryWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

export const CoverGalleryImgWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const RecommendImgContainer = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding-top: 17px;
  padding-left: 32px;
  padding-bottom: 8px;
  margin-bottom: 20px;
`;

export const RecommendImgTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 184px;
  margin-left: -15px;
  margin-bottom: 10px;
`;

export const ImgInfoIcon = styled.img`
  width: 20px;
`;

export const RecommendImgTitle = styled.div`
  font-weight: bold;
  margin-top: 3px;
`;

export const RecommendImgDetail = styled.ul`
  margin: 5px;

  li {
    list-style-type: disc;
    line-height: 28px;
  }
`;

export const ImgAddContainer = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  cursor: pointer;
`;

export const CoverAddBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background-color: #f0f0f0;
  padding: 15.5px 0px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const AddBtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 122px;
`;

export const CoverAddBtn = styled.img`
  cursor: pointer;
  width: 19px;
  height: 18px;
`;

export const CoverAddText = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-top: 3px;
`;

export const ImgAddBtn = styled.input`
  display: none;
`;

export const BtnSection = styled.div`
  width: 100%;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 165px;
  margin: auto 0 0 auto;
`;

export const BackBtn = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 15px;
  font-weight: bold;
  color: #929292;
  ${({ isActive }) =>
    isActive &&
    css`
      color: #b2b2b2;
    `}

  cursor: pointer;
`;

export const BackBtnPressed = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 15px;
  font-weight: bold;
  color: #b2b2b2;
  cursor: pointer;
`;

export const BackBtnLeave = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 15px;
  font-weight: bold;
  color: #929292;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  background-color: #ff5d00;
  border: transparent;
  border-radius: 3px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 9px 13px;
  cursor: pointer;
`;
