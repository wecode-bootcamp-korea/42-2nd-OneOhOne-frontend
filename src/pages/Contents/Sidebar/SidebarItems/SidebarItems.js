import React, { useEffect, useState } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import * as S from "./SidebarItems.styles";

export const SidebarItems = ({ isOpen, isChecked, lectures, params }) => {
  const [mockLectures, setMockLectures] = useState([]);

  useEffect(() => {
    fetch("/data/Contents/getContents.json")
      .then(res => res.json())
      .then(data => setMockLectures(data.curriculum));
  }, []);

  return (
    <S.SidebarMenuItem isopen={isOpen}>
      {mockLectures.map(lectures => {
        return (
          <SidebarItem
            params={params}
            key={lectures.id}
            {...lectures}
            isChecked={isChecked}
          />
        );
      })}
    </S.SidebarMenuItem>
  );
};
