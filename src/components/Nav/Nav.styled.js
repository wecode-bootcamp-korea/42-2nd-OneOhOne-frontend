import styled, { css } from "styled-components";

const flexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.nav`
  ${flexCenterMixin}
  width: 100%;
`;

export const NavMainDiv = styled.span`
  height: 90px;
  width: 1200px;
  padding: 0 20px;
  ${flexCenterMixin}
  justify-content: space-between;
`;

export const NavTitleSpan = styled.span`
  font-size: 33px;
  font-weight: bold;
`;

export const NavCategorySpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin: 0 18px;
`;

export const NavInput = styled.input`
  width: 380px;
  height: 38px;
  background-color: #f8f8f8;
  border: none;
  padding-left: 20px;
  background-image: url("/images/glasses.png");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 23px;
`;

export const NavRightDiv = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  cursor: pointer;
`;
