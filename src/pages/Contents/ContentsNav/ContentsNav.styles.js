import styled from "styled-components";
import { flex } from "../../../styles/variables";

export const NavContainer = styled.div`
  ${flex}
  justify-content: unset;
  height: 50px;
  background-color: white;
`;
export const NavigateIcon = styled.img`
  width: 20px;
`;
export const DashboardButton = styled.button`
  ${flex};
  gap: 10px;
  height: 100%;
  width: 150px;
  border: none;
  font-size: 15px;
  &:hover {
    transition: 0.1s;
    background-color: lightgray;
    cursor: pointer;
  }
`;
export const VideoName = styled.div`
  ${flex};
  margin-left: 20px;
`;
