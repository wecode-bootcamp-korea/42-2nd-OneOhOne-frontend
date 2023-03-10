import styled from "styled-components";
import { flex } from "../../../styles/variables";

export const SidebarContainer = styled.div`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "500px" : "50px")};
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
`;
export const SidebarMenuIcon = styled.div`
  ${flex};
  justify-content: space-between;
  height: 50px;
  background-color: #efefef;
`;
export const SidebarToggle = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const CloseButton = styled.img`
  display: ${({ isOpen }) => isOpen || "none"};
  width: 20px;
  height: 20px;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const SidebarMenu = styled.ul`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
export const SidebarMenuIndex = styled.h1`
  font-size: 25px;
`;
export const LectureName = styled.h2`
  font-size: 20px;
  margin: 10px 0px;
`;
