import styled from "styled-components";

export const SignupPgBackDIv = styled.div`
  background-image: url("/images/loginBackground.jpg");
  background-size: 450px;
  height: 90vh;
`;
export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f1f3f5;
`;

export const InnerDiv = styled.div`
  width: 450px;
  height: 580px;
  padding: 10px 40px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dbdbdb;
  position: relative;
  border-radius: 20px;
`;

export const SignupH1 = styled.h1`
  margin-bottom: 30px;
  padding-top: 8%;
  font-size: 26px;
  font-weight: bold;
  /* border: 1px solid red; */
`;

export const SignupInput = styled.input`
  width: 100%;
  height: 44.5px;
  margin: 10px 0px 15px 0px;
  border-radius: 5px;
  padding: 7px 15px;
  border: 1px solid lightgrey;
  background-color: #fafafa;
`;

export const SignupBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #fe5d01;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin-top: 10px;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const PwExplainSpan = styled.span`
  display: flex;
  font-size: 12px;
  color: #777;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const SnsLginDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  margin-top: 20px;
  padding-top: 10px;
`;

export const KakaoBtn = styled.button`
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-image: url("/images/kakao.png");
  background-size: 30px;
  background-position: center left 85px;
  background-repeat: no-repeat;
  font-size: 15px;
  font-weight: bold;
  background-color: #f2f2f2;

  &:hover {
    background-color: #e4e4e4;
    cursor: pointer;
  }
`;

export const LoginDiv = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  color: #777;
  font-size: 14px;
`;

export const LoginSpan = styled.span`
  color: black;
  margin-left: 10px;
  font-size: 15px;

  cursor: pointer;
`;

export const EmailandPwH1 = styled.h1`
  font-size: 13px;
`;
