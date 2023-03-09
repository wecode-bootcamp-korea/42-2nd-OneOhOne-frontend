import styled from "styled-components";

export const LoginPgBackDIv = styled.div`
  height: 100vh;
  background-image: url("/images/loginBackground.jpg");
  background-size: 450px;
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const InnerDiv = styled.div`
  width: 450px;
  height: 680px;
  padding: 10px 40px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dbdbdb;
  position: relative;
  border-radius: 20px;
`;

export const LoginH1 = styled.h1`
  margin-bottom: 30px;
  padding-top: 8%;
  font-size: 26px;
  font-weight: bold;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 44.5px;
  margin: 10px 0px 15px 0px;
  border-radius: 5px;
  padding: 7px 15px;
  border: 1px solid lightgrey;
  background-color: #fafafa;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #fe5d01;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin-top: 28px;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const forgotPwDiv = styled.div`
  position: absolute;
  display: flex;
  left: 290px;
  font-size: 12px;
  text-decoration: none;
  color: #777;
  cursor: pointer;
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

export const NaverBtn = styled.button`
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-image: url("/images/naver.png");
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

export const FacebookBtn = styled.button`
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-image: url("/images/facebook.png");
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

export const AppleBtn = styled.button`
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-image: url("/images/apple.png");
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
export const SignUpDiv = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  color: #777;
  font-size: 14px;
`;

export const SignUpSpan = styled.span`
  color: black;
  margin-left: 10px;
  font-size: 15px;

  cursor: pointer;
`;

export const EmailandPwH1 = styled.h1`
  font-size: 13px;
`;

export const LogoDiv = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 30px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoSpan = styled.span`
  color: white;
  font-size: 25px;
  font-weight: bold;
  width: 1200px;

  cursor: pointer;
`;
