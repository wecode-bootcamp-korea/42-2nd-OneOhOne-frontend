import React from "react";
import * as S from "./ContentsFooter.styles";

export const ContentsFooter = ({ curriculumId, videoId }) => {
  return (
    <S.FooterContainer>
      <S.LectureButton to={`/contents/${curriculumId}/${Number(videoId) - 1}`}>
        이전 강의
      </S.LectureButton>
      <S.LectureButton to={`/contents/${curriculumId}/${Number(videoId) + 1}`}>
        다음 강의
      </S.LectureButton>
    </S.FooterContainer>
  );
};
// To-do: 이전, 다음 강의 조건 다시 걸기
