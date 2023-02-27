import React, { useState, useEffect } from "react";
import { Chapter } from "./Chapter";
import * as S from "./Curriculum.style";

export const Curriculum = () => {
  return (
    <S.DetailContainer>
      <S.Title>커리큘럼</S.Title>
      <S.Subtitle>
        클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
        쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
      </S.Subtitle>
      <Chapter />
    </S.DetailContainer>
  );
};
