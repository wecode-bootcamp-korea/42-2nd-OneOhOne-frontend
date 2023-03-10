import React from "react";
import * as S from "./ProductStatus.style";

function ProductStatus() {
  return (
    <S.StatusContainer>
      <S.StatusTitle>상품 상태</S.StatusTitle>
      <S.CurrentStatusContainer>
        <S.CurrentStatusTitle>현재 상태</S.CurrentStatusTitle>
        <S.ProductStatus>상품 초안 작성 중</S.ProductStatus>
      </S.CurrentStatusContainer>
      <S.SubmitGuide>
        무엇을 배우게 되는 클래스인지 상세하게 내용을 작성해주세요. 작성 완료 후
        "검토요청"을 눌러주시면, 작성해주신 설문조사와 클래스 페이지를 검토하고
        결과를 알려드릴게요.
      </S.SubmitGuide>
      <S.ReviewBtn>검토 요청</S.ReviewBtn>
    </S.StatusContainer>
  );
}

export default ProductStatus;
