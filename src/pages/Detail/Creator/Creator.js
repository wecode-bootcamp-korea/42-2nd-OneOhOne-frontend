import React, { useState, useEffect } from "react";
import * as S from "./Creator.style";

export const Creator = () => {
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setCreator(data.data));
  }, []);

  return (
    <S.DetailContainer>
      <S.TitleBox>
        <S.Title>안녕하세요,</S.Title>
        <S.CreatorNameBox>
          <S.CreatorName>{creator.creatorName}</S.CreatorName>
          <S.Title>입니다.</S.Title>
        </S.CreatorNameBox>
      </S.TitleBox>
      <S.CreatorInfo>{creator.creatorDescription}</S.CreatorInfo>
    </S.DetailContainer>
  );
};
