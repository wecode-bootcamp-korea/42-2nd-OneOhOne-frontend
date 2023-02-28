import React from "react";
import { IsCheckedIndividually } from "./IsCheckedIndividually/IsCheckedIndividually";
import { useParams } from "react-router-dom";
import * as S from "./SidebarItem.styles";

const SidebarItem = ({ curriculumId, video, chapterName, isChecked }) => {
  return (
    <S.ItemWrapper key={curriculumId}>
      <S.ChapterWrapper>
        <S.ChapterName>{chapterName}</S.ChapterName>
      </S.ChapterWrapper>
      {video.map(list => {
        return (
          <IsCheckedIndividually
            key={list.videoId}
            {...list}
            isChecked={isChecked}
            curriculumId={curriculumId}
          />
        );
      })}
    </S.ItemWrapper>
  );
};

export default SidebarItem;
