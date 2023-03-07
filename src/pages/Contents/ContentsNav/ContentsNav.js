import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ContentsNav.styles";

export const ContentsNav = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/detail");
  };

  return (
    <S.NavContainer>
      <S.DashboardButton onClick={goToDetails}>
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
