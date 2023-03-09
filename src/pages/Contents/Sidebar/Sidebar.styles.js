import styled from "styled-components";
import { flex } from "../../../styles/variables";

export const SidebarContainer = styled.div`
  height: 100%;
  max-width: 500px;
  overflow: auto;
  overflow-x: hidden;
`;
export const SidebarMenuIcon = styled.div`
  ${flex};
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: #efefef;
  width: 100%;
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
  width: ${({ isOpen }) => (isOpen ? "600px" : "50px")};
  background-color: white;
  transition: all 0.3s ease-in-out;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 40px;
`;
export const SidebarMenuIndex = styled.h1`
  font-size: 25px;
`;
export const LectureName = styled.h2`
  font-size: 20px;
  margin: 10px 0px;
`;
