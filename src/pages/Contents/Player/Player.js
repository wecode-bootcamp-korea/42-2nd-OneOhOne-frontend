import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { ContentsFooter } from "../ContentsFooter/ContentsFooter";
import { ContentsNav } from "../ContentsNav/ContentsNav";
import * as S from "./Player.styles";

export const Player = ({ getPlayTime, lectures, params }) => {
  const { curriculumId, videoId } = params;
  const [lecture, setLectures] = useState([]);
  const [getUrl, setGetUrl] = useState("");
  // console.log(videoId);

  // Mock-data 연결 시
  useEffect(() => {
    fetch("/data/Contents/getContents.json")
      .then(res => res.json())
      .then(data => setLectures(data.curriculum));
  }, []);

  // API 연결 시
  // useEffect(() => {
  //   fetch(`http://10.58.52.60:8000/videos/${params.videoId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setGetUrl(data.data));
  // }, [params.videoId]);

  // const videoSrc = getUrl[0]?.videoUrl;

  return (
    <S.PlayerContainer>
      <ContentsNav videoId={videoId} lectures={lectures} />
      <ReactPlayer
        url="/videos/contents/contents_surfer.mp4"
        width="100%"
        height="85vh"
        controls={true}
        onProgress={getPlayTime}
      />
      <ContentsFooter videoId={videoId} />
    </S.PlayerContainer>
  );
};
