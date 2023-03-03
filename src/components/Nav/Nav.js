import React, { useState } from "react";
import * as S from "./Nav.styled";
const Nav = () => {
  const [isLoggeIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggeIn);
  };
  return (
    <S.NavBar>
      <S.NavMainDiv>
        <div>
          <S.NavTitleSpan>OneOhOne</S.NavTitleSpan>
          <S.NavCategorySpan>전체 카테고리 ▾</S.NavCategorySpan>
          <S.NavInput type="text" placeholder="찾으시는 강의가 있나요?" />
        </div>
        <S.NavRightDiv>
          <span>크리에이터 센터</span>
          <span onClick={handleLoginClick}>
            {isLoggeIn ? "로그아웃" : "로그인"}
          </span>
        </S.NavRightDiv>
      </S.NavMainDiv>
    </S.NavBar>
  );
};

export default Nav;
