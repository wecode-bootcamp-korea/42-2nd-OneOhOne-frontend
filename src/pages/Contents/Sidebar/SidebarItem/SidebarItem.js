import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IsCheckedIndividually } from "./IsCheckedIndividually/IsCheckedIndividually";
import * as S from "./SidebarItem.styles";

const SidebarItem = ({ lectureId, video, chapterName, isChecked }) => {
  const [videoItem, setVideoItem] = useState([]);
  const params = useParams();
  // useEffect(() => {
  // 전체 리스트 get
  //   fetch(`http://10.58.52.60:8000/videos/list/${params.videoId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setVideoItem(data.data));
  // }, [params.videoId]);

  return (
    <S.ItemWrapper key={lectureId}>
      <S.ChapterWrapper>
        <S.ChapterName>{chapterName}</S.ChapterName>
      </S.ChapterWrapper>
      {video.map(list => {
        return (
          <IsCheckedIndividually
            key={list.videoId}
            {...list}
            isChecked={isChecked}
            params={params}
          />
        );
      })}
    </S.ItemWrapper>
  );
};

export default SidebarItem;
