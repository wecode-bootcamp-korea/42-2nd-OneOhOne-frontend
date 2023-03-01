import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Wrapper>
      <S.HeaderItemWrapper>
        <S.TitleWrapper>
          <S.Logo
            src="https://cdn-icons-png.flaticon.com/128/9823/9823993.png"
            alt="크리에이터 센터 로고 이미지"
          />
          <S.Title>Creator Center</S.Title>
        </S.TitleWrapper>
        <S.ProfileImg
          src="https://cdn-icons-png.flaticon.com/128/201/201634.png"
          alt="프로필 이미지"
        />
      </S.HeaderItemWrapper>
    </S.Wrapper>
  );
}

export default Header;
