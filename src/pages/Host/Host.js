import React from "react";
import Header from "./Header/Header";
import Side from "./Side/Side";
// import ClassBasicInfo from "./ClassBasicInfo/ClassBasicInfo";
// import ClassDetailInfo from "./ClassDetailInfo/ClassDetailInfo";
// import CreatorInfo from "./CreatorInfo/CreatorInfo";
// import ProductStatus from "./ProductStatus/ProductStatus";
// import Marketing from "./Marketing/Marketing";
// import Comment from "./Comment/Comment";
import CurriculumSection from "./CurriculumSection/CurriculumSection";
import * as S from "./Host.style";
import { useState } from "react";
import ClassContainer from "./ClassContainer/ClassContainer";

function Host() {
  const [curriculumVisible, setCurriculumVisible] = useState(false);
  const [classContainerVisible, setClassContainerVisible] = useState(true);

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
          <S.BasicInfo>기본 정보</S.BasicInfo>
          <S.ClassKit>클래스 및 키트</S.ClassKit>
          <S.Curriculum
            onClick={() => {
              setCurriculumVisible(!curriculumVisible);
              setClassContainerVisible(!classContainerVisible);
            }}
          >
            커리큘럼
          </S.Curriculum>
        </S.Category>
      </S.MainContainer>
      {classContainerVisible ? <ClassContainer /> : ""}

      {/* <S.ClassContainer>
        <S.ClassSection>
          <ClassBasicInfo />
          <ClassDetailInfo />
          <CreatorInfo />
        </S.ClassSection>

        <S.ProductSection>
          <ProductStatus />
          <Marketing />
          <Comment />
        </S.ProductSection>
      </S.ClassContainer> */}
      {curriculumVisible && <CurriculumSection />}
    </div>
  );
}

export default Host;
