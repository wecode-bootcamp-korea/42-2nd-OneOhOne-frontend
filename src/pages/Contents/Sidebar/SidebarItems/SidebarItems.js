import React, { useState, useEffect } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import * as S from "./SidebarItems.styles";

export const SidebarItems = ({ isOpen, isChecked }) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetch("/data/Contents/getContents.json")
      .then(res => res.json())
      .then(data => setLectures(data.curriculum));
  }, []);

  return (
    <S.SidebarMenuItem isopen={isOpen}>
      {lectures.map(lecture => {
        return (
          <SidebarItem key={lecture.id} {...lecture} isChecked={isChecked} />
        );
      })}
    </S.SidebarMenuItem>
  );
};
