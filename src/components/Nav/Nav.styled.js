import styled, { css } from "styled-components";

const flexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.nav`
  ${flexCenterMixin}
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: white;
  position: fixed;
  z-index: 100;
  background-color: white;
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
export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  top: 110%;
  right: -15%;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 250px;
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 17px;
  line-height: 3;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NavCategorySpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin: 0 18px;
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }
`;

export const NavRightDiv = styled.div`
  width: 160px;
  display: flex;
  /* justify-content: space-between; */
  font-size: 15px;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  top: 110%;
  right: -15%;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 250px;
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 17px;
  line-height: 3;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NavCategorySpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin: 0 18px;
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }
`;

export const LoginImg = styled.img`
  width: 28px;
  display: flex;
  position: absolute;
  margin-left: 140px;
  margin-top: -5px;
`;
