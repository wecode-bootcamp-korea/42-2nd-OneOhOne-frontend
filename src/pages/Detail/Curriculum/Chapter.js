import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Chapter.style";

export const Chapter = () => {
  const [lecture, setLecture] = useState([]);

  const curriculums = lecture.curriculums?.map(
    ({ curriculumChapterName, curriculumId, videos }) => {
      return { curriculumChapterName, curriculumId, videos };
    }
  );

  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const goToContents = params => {
    navigate(`/contents/${Number(params)}`);
  };

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setLecture(data.data));
  }, []);

  return (
    <S.ChapterContainer>
      <S.ChapterInfo>
        {curriculums?.map(({ curriculumId, curriculumChapterName, videos }) => {
          return (
            <S.ChapterBox key={curriculumId}>
              <S.ChapterName>
                {curriculumChapterName}
                {videos.map(({ videoId, videoName }) => {
                  return (
                    <S.VideoName
                      key={videoId}
                      onClick={() => goToContents(params)}
                    >
                      {videoName}
                      <S.VideoButton>무료공개</S.VideoButton>
                    </S.VideoName>
                  );
                })}
              </S.ChapterName>
            </S.ChapterBox>
          );
        })}
      </S.ChapterInfo>
    </S.ChapterContainer>
  );
};
