import styled from "styled-components";

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

export const ImgAddBtn = styled.input`
  display: none;
`;
