import React from "react";
import Header from "./Header/Header";
import Side from "./Side/Side";
import CurriculumSection from "./CurriculumSection/CurriculumSection";
import * as S from "./Host.style";
import { useState } from "react";
import ClassContainer from "./ClassContainer/ClassContainer";

function Host() {
  const [curriculumVisible, setCurriculumVisible] = useState(false);
  const [classContainerVisible, setClassContainerVisible] = useState(true);
  const [basicInfoClicked, setBasicInfoClicked] = useState(false);
  const [curriculumClicked, setCurriculumClicked] = useState(false);

  return (
    <div>
      <Header />
      <Side />
      <S.MainContainer>
        <S.MainHeader>
          <S.List>목록&nbsp; {">"} &nbsp; </S.List>
          <S.MyClass> 내 클래스</S.MyClass>
        </S.MainHeader>
        <S.TitleWrapper>
          <S.Title>정규 클래스</S.Title>
          <S.PreviewWrapper>
            <S.PreviewIcon src="https://cdn-icons-png.flaticon.com/128/4893/4893771.png" />
            <S.Preview>미리 보기</S.Preview>
          </S.PreviewWrapper>
        </S.TitleWrapper>
        <S.Category>
          <S.BasicInfo
            onClick={() => {
              setBasicInfoClicked(true);
            }}
            basicInfoClicked={basicInfoClicked}
            curriculumClicked={curriculumClicked}
          >
            기본 정보
          </S.BasicInfo>
          <S.ClassKit>클래스 및 키트</S.ClassKit>
          <S.Curriculum
            onClick={() => {
              setCurriculumVisible(!curriculumVisible);
              setClassContainerVisible(!classContainerVisible);
              setCurriculumClicked(true);
            }}
            curriculumClicked={curriculumClicked}
          >
            커리큘럼
          </S.Curriculum>
        </S.Category>
      </S.MainContainer>
      {classContainerVisible ? <ClassContainer /> : ""}

      {curriculumVisible && <CurriculumSection />}
    </div>
  );
}

export default Host;
