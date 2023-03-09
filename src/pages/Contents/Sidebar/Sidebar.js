import React, { useState } from "react";
import { SidebarItems } from "./SidebarItems/SidebarItems";
import * as S from "./Sidebar.styles";

export const Sidebar = ({ isChecked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.SidebarMenuIcon>
        <S.SidebarToggle
          onClick={toggleSidebar}
          alt="menu"
          src="/images/Contents/Icons/bars-solid.png"
        />
        <S.CloseButton
          onClick={toggleSidebar}
          isOpen={isOpen}
          alt="X"
          src="/images/Contents/Icons/xmark-solid.png"
        />
      </S.SidebarMenuIcon>
      {isOpen && (
        <S.SidebarMenu isOpen={isOpen}>
          <S.SidebarMenuIndex isOpen={isOpen}>목차</S.SidebarMenuIndex>
          <S.LectureName isOpen={isOpen}>강좌명</S.LectureName>
          <SidebarItems
            isOpen={isOpen}
            isChecked={isChecked}
            toggleSidebar={toggleSidebar}
          />
        </S.SidebarMenu>
      )}
    </S.SidebarContainer>
  );
};
