import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ContentsNav.styles";

export const ContentsNav = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setDetails(data.data));
  }, []);
  const lectureId = details.lectureId;

  const goToDetails = id => {
    navigate(`/detail/${Number(id)}`);
  };

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
      <S.VideoName>강의 소개</S.VideoName>
    </S.NavContainer>
  );
};
