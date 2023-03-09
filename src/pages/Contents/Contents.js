import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Player } from "./Player/Player";
import { Sidebar } from "./Sidebar/Sidebar";
import * as S from "./Contents.styles";

const Contents = () => {
  const [played, setPlayed] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const [lectures, setLectures] = useState([]);
  const params = useParams();
  // useEffect(() => {
  //   // 전체 리스트 get
  //   fetch(`http://10.58.52.60:8000/videos/list/${params.videoId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setLectures(data.data));
  // }, [params.videoId]);
  // console.log(lectures);

  const getPlayTime = progress => {
    setPlayed(progress);
    if (played.loadedSeconds * 0.5 <= played.playedSeconds) {
      setIsChecked(true);
    }
  };

  return (
    <S.Div>
      <Player lectures={lectures} params={params} getPlayTime={getPlayTime} />
      <Sidebar lectures={lectures} params={params} isChecked={isChecked} />
    </S.Div>
  );
};

export default Contents;
