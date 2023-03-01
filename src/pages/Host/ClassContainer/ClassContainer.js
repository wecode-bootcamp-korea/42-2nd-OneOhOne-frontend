import React from "react";
import ClassBasicInfo from "../ClassBasicInfo/ClassBasicInfo";
import ClassDetailInfo from "../ClassDetailInfo/ClassDetailInfo";
import CreatorInfo from "../CreatorInfo/CreatorInfo";
import ProductStatus from "../ProductStatus/ProductStatus";
import Marketing from "../Marketing/Marketing";
import Comment from "../Comment/Comment";
import * as S from "./ClassContainer.style";

function ClassContainer() {
  return (
    <S.ClassContainer>
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
    </S.ClassContainer>
  );
}

export default ClassContainer;
