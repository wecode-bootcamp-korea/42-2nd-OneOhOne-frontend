import React from "react";
import * as S from "./CoachRefund.style";

export const CoachRefund = () => {
  return (
    <>
      <S.RefundSubtitle>수강권 환불</S.RefundSubtitle>
      <S.RefundGrid>
        <S.GridTitle>환불요청일</S.GridTitle>
        <S.GridTitle>환불금액</S.GridTitle>
        <S.GridItemBox>
          <S.GridItem>코칭권 이용기간 만료 전</S.GridItem>
        </S.GridItemBox>
        <S.GridItemBox>
          <S.GridItem>결제대금 전액</S.GridItem>
        </S.GridItemBox>

        <S.GridItemLastBox>
          <S.GridItem>코칭권 이용기간 만료 후</S.GridItem>
        </S.GridItemLastBox>
        <S.GridItemLastBox>
          <S.GridItem>환불 불가</S.GridItem>
        </S.GridItemLastBox>
      </S.RefundGrid>
      <S.DetailContainer>
        <div>·</div>
        <S.DetailItem>
          코칭권 이용기간은 구매 당시 부여된 기간을 기준으로 합니다.
        </S.DetailItem>
      </S.DetailContainer>
    </>
  );
};
