import React, { useState } from "react";
import * as S from "./Signup.styled";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput(prevState => ({ ...prevState, [name]: value }));
  };

  const isDisabled =
    userInput.email.includes("@") &&
    userInput.password.length >= 5 &&
    userInput.password === userInput.confirmPassword;

  return (
    <S.SignupPgBackDIv>
      <S.ContainerDiv>
        <S.InnerDiv>
          <S.SignupH1>회원가입</S.SignupH1>
          <div>
            <S.EmailandPwH1>이메일</S.EmailandPwH1>
            <S.SignupInput
              type="text"
              placeholder="example@naver.com"
              onChange={handleInputChange}
              value={userInput.email}
              name="email"
            />
          </div>
          <div>
            <S.EmailandPwH1>비밀번호</S.EmailandPwH1>
            <S.SignupInput
              type="password"
              placeholder="********"
              onChange={handleInputChange}
              value={userInput.password}
              name="password"
            />
            <S.PwExplainSpan>
              <span>
                영문 대·소문자/숫자/특수문자 중 2가지 이상 조합, 8자~32자
              </span>
            </S.PwExplainSpan>
          </div>
          <div>
            <S.EmailandPwH1>비밀번호 확인</S.EmailandPwH1>
            <S.SignupInput
              type="password"
              placeholder="********"
              onChange={handleInputChange}
              value={userInput.confirmPassword}
              name="confirmPassword"
            />
          </div>
          <div>
            <S.SignupBtn
              type="button"
              className="btnSignup"
              disabled={isDisabled}
            >
              <span>회원가입</span>
            </S.SignupBtn>
          </div>
          <S.SnsLginDiv>
            <S.KakaoBtn>카카오로 시작하기</S.KakaoBtn>
          </S.SnsLginDiv>
          <S.LoginDiv>
            <span>이미 계정이 있으신가요? </span>
            <S.LoginSpan> 로그인 </S.LoginSpan>
          </S.LoginDiv>
        </S.InnerDiv>
      </S.ContainerDiv>
    </S.SignupPgBackDIv>
  );
};

export default Signup;
