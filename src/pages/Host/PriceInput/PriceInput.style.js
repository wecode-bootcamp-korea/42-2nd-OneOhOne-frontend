import styled, { css } from "styled-components";

export const PriceWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  display: ${({ isActive }) => (isActive ? "none" : "flex")};
`;

export const PriceInput = styled.input`
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding: 15px 0px 15px 20px;
  font-size: 15px;
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
