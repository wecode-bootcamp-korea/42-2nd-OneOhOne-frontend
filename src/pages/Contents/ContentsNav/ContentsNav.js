import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ContentsNav.styles";

export const ContentsNav = ({ videoId, lectures }) => {
  const navigate = useNavigate();
  const lectureId = lectures?.lecture?.id;
  const goToDetails = id => {
    navigate(`/detail/${Number(id)}`);
  };

  // Mock-data 연결 시
  // const [mockDetails, setMockDetails] = useState([]);
  // useEffect(() => {
  //   fetch("/data/Detail/getDetail.json")
  //     .then(res => res.json())
  //     .then(data => setMockDetails(data.data));
  // }, []);

  // const lecture = [{ lecture }, { curriculum }];

  // const videoInfo = lectures?.curriculums?.map(list =>
  //   list?.videos?.map(video => {
  //     return { id: video.videoId, name: video.name };
  //   })
  // );
  // const chapterId = lectures?.curriculums?.map(
  //   item => item.curriculumsSequence
  // );
  // console.log("chapterId", chapterId);

  // const videoName = mockDetails.curriculums.map(list =>
  //   list.videos.map(list => list.videoName)
  // );

  return (
    <S.NavContainer>
      <S.DashboardButton
        onClick={() => {
          goToDetails(lectureId);
        }}
      >
        <S.NavigateIcon
          alt="이동"
          src="/images/Contents/Icons/right-to-bracket-solid.png"
        />
        강의 대시보드
      </S.DashboardButton>
      <S.VideoName>videoName</S.VideoName>
    </S.NavContainer>
  );
};
// TO-DO: lectureName이 아니라 videoName이 담겨야 함
