import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import { ContentsFooter } from "../ContentsFooter/ContentsFooter";
import { ContentsNav } from "../ContentsNav/ContentsNav";
import * as S from "./Player.styles";

export const Player = ({ getPlayTime }) => {
  const [lectures, setLectures] = useState([]);
  const params = useParams();
  const { curriculumId, videoId } = params;

  useEffect(() => {
    fetch("/data/Contents/getContents.json")
      .then(res => res.json())
      .then(data => setLectures(data.curriculum));
  }, []);

  const videoSrc = lectures
    .filter(list => list.curriculumId === Number(curriculumId))[0]
    ?.video.filter(list => list.videoId === Number(videoId))[0]?.src;

  return (
    <S.PlayerContainer>
      <ContentsNav />
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="85vh"
        controls={true}
        onProgress={getPlayTime}
      />
      <ContentsFooter curriculumId={curriculumId} videoId={videoId} />
    </S.PlayerContainer>
  );
};
