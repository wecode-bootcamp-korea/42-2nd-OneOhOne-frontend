import React, { useState, useEffect } from "react";
import * as S from "./Chapter.style";

export const Chapter = () => {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setLecture(data.data));
  }, []);
  if (!lecture.lectureId) return null;

  const curriculums = lecture.curriculums;
  const videos = lecture.videos;

  return (
    <S.ChapterContainer>
      <S.VideoImage alt="비디오" src="" />
      <S.ChapterInfo>
        {curriculums.map(data => (
          <S.ChapterBox key={data.curriculumId}>
            <S.ChapterName>{data.curriculumChapterName}</S.ChapterName>
          </S.ChapterBox>
        ))}
        {videos.map(data => (
          <S.VideoName key={videos.videoId}>
            {data.videoName}
            <S.VideoButton>무료공개</S.VideoButton>
          </S.VideoName>
        ))}
      </S.ChapterInfo>
    </S.ChapterContainer>
  );
};
