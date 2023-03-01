import styled, { css } from "styled-components";

export const CoverImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 660px;
  margin-top: 10px;
`;

export const CoverImgDescription = styled.p`
  color: #5e5e5e;
  line-height: 28px;
`;

export const RestrictedImgContainer = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding-top: 17px;
  padding-left: 32px;
  padding-bottom: 8px;
`;

export const RestrictedImgTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 285px;
  margin-left: -15px;
  margin-bottom: 10px;
`;

export const ImgAddBtn = styled.input`
  display: none;
`;

export const ImgInfoIcon = styled.img`
  width: 20px;
`;

export const RestrictedImgTitle = styled.div`
  font-weight: bold;
  margin-top: 3px;
`;

export const RestrictedImgDetail = styled.ul`
  margin: 5px;

  li {
    list-style-type: disc;
    line-height: 28px;
  }
`;

export const RecommendImgContainer = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding-top: 17px;
  padding-left: 32px;
  padding-bottom: 8px;
`;

export const RecommendImgTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 184px;
  margin-left: -15px;
  margin-bottom: 10px;
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

export const CoverImg = styled.img`
  width: 100%;
  height: 75%;
`;

export const ImgAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  padding: 60px;
  cursor: pointer;
`;

export const ImgAddIcon = styled.img`
  width: 70px;
  filter: brightness(140%);
`;

export const ImgAddText = styled.span`
  color: #929292;
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
