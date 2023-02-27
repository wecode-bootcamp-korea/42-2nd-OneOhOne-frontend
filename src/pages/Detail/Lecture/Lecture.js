import React, { useEffect, useState } from "react";
import * as S from "./Lecture.style";

export const Lecture = () => {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setLecture(data.data));
  }, []);
  if (!lecture.lectureId) return null;

  return (
    <S.DetailContainer>
      <S.Title>클래스 소개</S.Title>
      <S.LectureDisc>{lecture.lectureDescription}</S.LectureDisc>
    </S.DetailContainer>
  );
};
