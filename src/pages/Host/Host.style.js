import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  margin-left: 460px;
  margin-top: 150px;
  overflow: hidden;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 135px;
  margin-bottom: 50px;
  font-size: 19px;
`;

export const List = styled.div`
  color: #a2a0a0;
`;

export const MyClass = styled.div``;

export const TitleWrapper = styled.div`
  width: 92.5%;
  display: flex;
  justify-content: space-between;
`;

export const PreviewWrapper = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;

export const PreviewIcon = styled.img`
  width: 30px;
`;

export const Preview = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  width: 330px;
  margin-top: 40px;
`;

// export const BasicInfo = styled.h2`
//   font-size: 20px;
//   font-weight: bold;
//   padding-bottom: 10px;
//   border-bottom: ${(({ basicInfoClicked, curriculumClicked }) =>
//     basicInfoClicked ? "3.1px solid black" : "none",
//   curriculumClicked ? "none" : "3.1px solid black")};
//   cursor: pointer;
// `;

export const BasicInfo = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: ${({ basicInfoClicked, curriculumClicked }) =>
    basicInfoClicked
      ? "3.1px solid black"
      : curriculumClicked
      ? "none"
      : "3.1px solid black"};
  cursor: pointer;
`;

export const ClassKit = styled.h2`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Curriculum = styled.h2`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: ${({ curriculumClicked }) =>
    curriculumClicked ? "3.1px solid black" : "none"};
`;
