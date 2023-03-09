import React from "react";
import * as S from "./ProductRefund.style";

export const ProductRefund = () => {
  return (
    <>
      <S.RefundSubtitle>수강권 환불</S.RefundSubtitle>
      <S.RefundGrid>
        <S.GridTitle>환불요청일</S.GridTitle>
        <S.GridTitle>환불금액</S.GridTitle>
        {PRODUCT_GRID_ITEM.map(item => (
          <>
            <S.GridItemBox>
              <S.GridItem>{item.date}</S.GridItem>
            </S.GridItemBox>
            <S.GridItemBox>
              <S.GridItem>{item.cost}</S.GridItem>
            </S.GridItemBox>
          </>
        ))}
        <S.GridItemLastBox>
          <S.GridItem>상품 수령일로부터 7일 경과 후</S.GridItem>
        </S.GridItemLastBox>
        <S.GridItemLastBox>
          <S.GridItem>환불 불가</S.GridItem>
        </S.GridItemLastBox>
      </S.RefundGrid>
      {PRODUCT_DETAIL_INFO.map(data => (
        <S.DetailContainer key={data.key}>
          <div>·</div>
          <S.DetailItem>{data.para}</S.DetailItem>
        </S.DetailContainer>
      ))}
      {PRODUCT_DETAIL_MORE_INFO.map(data => (
        <S.MoreDetailContainer key={data.key}>
          <div>-</div>
          <S.DetailItem>{data.para}</S.DetailItem>
        </S.MoreDetailContainer>
      ))}
    </>
  );
};

const PRODUCT_GRID_ITEM = [
  {
    date: "배송 시작 전",
    cost: "결제대금 전액",
  },
  {
    date: "출고 준비 중 상품 수령일로부터 7일 경과 전",
    cost: "결제대금 전액 (단, 상품 반송에 소요되는 운송비를 공제)",
  },
];

const PRODUCT_DETAIL_INFO = [
  {
    key: "1",
    para: "상품에 대한 환불절차는 상품의 미배송 또는 반송이 확인된 이후 진행됩니다.",
  },
  {
    key: "2",
    para: "상품 구성내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한 날로부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 환불이 가능합니다.",
  },
  {
    key: "3",
    para: "아래의 경우에는 환불을 요청할 수 없습니다.",
  },
];

const PRODUCT_DETAIL_MORE_INFO = [
  {
    key: "1",
    para: "회원에게 책임이 있는 사유로 상품이 멸실되거나 훼손된 경우",
  },
  {
    key: "2",
    para: "회원이 상품을 사용하거나 또는 일부 소비하여 상품의 가치가 현저히 감소한 경우",
  },
  {
    key: "3",
    para: "시간이 지나 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한 경우",
  },
  {
    key: "4",
    para: "복제가 가능한 상품의 포장을 훼손한 경우",
  },
  {
    key: "5",
    para: "디지털콘텐츠 상품의 제공이 개시된 경우",
  },
  {
    key: "6",
    para: "회사가 주문에 따라 개별적으로 생산되는 상품 등에 대하여 사전에 환불이 제한될 수 있음을 고지하고 동의를 받은 경우",
  },
  {
    key: "7",
    para: "그 밖에 관계 법령 또는 약관에 정하여진 사유가 있는 경우",
  },
];
