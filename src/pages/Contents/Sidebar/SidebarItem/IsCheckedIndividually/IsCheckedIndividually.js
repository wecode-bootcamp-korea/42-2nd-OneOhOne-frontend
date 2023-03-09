import React, { useState, useEffect } from "react";
import * as S from "./IsCheckedIndividually.styles";

export const IsCheckedIndividually = ({ isChecked, videoId, name }) => {
  const [isClickedIndividually, setIsClickedIndividually] = useState(false);
  const handleToggle = () => {
    setIsClickedIndividually(prev => !prev);
  };

  return (
    <S.IndividualItem>
      <S.LectureWrapper key={videoId} to={`/contents/${videoId}`}>
        <S.CheckIcon
          onClick={handleToggle}
          alt="v"
          src={`/images/Contents/Icons/circle-check-${
            isClickedIndividually || isChecked ? "solid" : "regular"
          }.png`}
        />
        <S.LectureItem onClick={handleToggle} to={`/contents/${videoId}`}>
          {name}
        </S.LectureItem>
      </S.LectureWrapper>
      <S.LengthBox>
        <S.LengthIcon
          alt="영상길이"
          src="/images/Contents/Icons/circle-play-solid.png"
        />
        <S.LectureLength>10분</S.LectureLength>
      </S.LengthBox>
    </S.IndividualItem>
  );
};
