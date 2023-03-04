import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./Login.styled";
const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  const [inputId, setInputId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = e => {
    if (e.target.name === "userId") {
      setInputId(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const isDisabled = inputId.includes("@") && password.length >= 8;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const goToList = () => {
    navigate("/");
  };

  return (
    <S.LoginPgBackDIv>
      <S.LogoDiv>
        <S.LogoSpan onClick={goToList}>OneOhOne</S.LogoSpan>
      </S.LogoDiv>
      <S.ContainerDiv>
        <S.InnerDiv>
          <S.LoginH1>로그인</S.LoginH1>
          <div>
            <S.EmailandPwH1>이메일</S.EmailandPwH1>
            <S.LoginInput
              type="text"
              placeholder="example@naver.com"
              onChange={handleInputChange}
              value={inputId}
              name="userId"
            />
          </div>
          <div>
            <S.EmailandPwH1>비밀번호</S.EmailandPwH1>
            <S.LoginInput
              type="password"
              placeholder="********"
              onChange={handleInputChange}
              value={password}
              name="password"
            />
          </div>
          <S.forgotPwDiv>
            <span>비밀번호를 잊으셨나요?</span>
          </S.forgotPwDiv>
          <div>
            <S.LoginBtn
              type="button"
              className="btnLogin"
              // onClick={goToMain}
              disabled={isDisabled}
            >
              <span>로그인</span>
            </S.LoginBtn>
          </div>
          <S.SnsLginDiv>
            <S.KakaoBtn onClick={handleLogin}>카카오로 시작하기</S.KakaoBtn>
            <S.NaverBtn>네이버로 시작하기</S.NaverBtn>
            <S.FacebookBtn>페이스북으로 시작하기</S.FacebookBtn>
            <S.AppleBtn>애플로 시작하기</S.AppleBtn>
          </S.SnsLginDiv>
          <S.SignUpDiv>
            <span>아직 O.O.O 회원이 아니신가요? </span>
            <S.SignUpSpan> 회원 가입</S.SignUpSpan>
          </S.SignUpDiv>
        </S.InnerDiv>
      </S.ContainerDiv>
    </S.LoginPgBackDIv>
  );
};

export default Login;
