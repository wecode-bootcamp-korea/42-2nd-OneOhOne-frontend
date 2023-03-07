import React from "react";
import * as S from "./ClassRefund.style";

export const ClassRefund = () => {
  return (
    <>
      <S.RefundSubtitle>수강권 환불</S.RefundSubtitle>
      <S.RefundGrid>
        <S.GridTitle>환불요청일</S.GridTitle>
        <S.GridTitle>환불금액</S.GridTitle>
        {CLASS_GRID_ITEM.map(item => (
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
          <S.GridItem>수강기간 또는 수강진도 15/18 경과 후</S.GridItem>
        </S.GridItemLastBox>
        <S.GridItemLastBox>
          <S.GridItem>환불 불가</S.GridItem>
        </S.GridItemLastBox>
      </S.RefundGrid>
      {CLASS_DETAIL_INFO.map(data => (
        <S.DetailContainer key={data.key}>
          <div>·</div>
          <S.DetailItem>{data.para}</S.DetailItem>
        </S.DetailContainer>
      ))}
    </>
  );
};

const CLASS_GRID_ITEM = [
  {
    date: "수강기간 시작일로부터 7일 이내 3개 이하 클래스 영상 (샘플 영상 제외)을 이용한 경우",
    cost: "결제대금 전액",
  },
  {
    date: "수강기간 또는 수강진도 2/18 경과 전",
    cost: "	결제대금의 16/18",
  },
  {
    date: "수강기간 또는 수강진도 3/18 경과 전",
    cost: "	결제대금의 15/18",
  },
  {
    date: "수강기간 또는 수강진도 6/18 경과 전",
    cost: "결제대금의 12/18",
  },
  {
    date: "수강기간 또는 수강진도 8/18 경과 전",
    cost: "결제대금의 10/18",
  },
  {
    date: "수강기간 또는 수강진도 9/18 경과 전",
    cost: "결제대금의 9/18",
  },
  {
    date: "수강기간 또는 수강진도 12/18 경과 전",
    cost: "결제대금의 6/18",
  },
  {
    date: "수강기간 또는 수강진도 14/18 경과 전",
    cost: "결제대금의 4/18",
  },
  {
    date: "수강기간 또는 수강진도 15/18 경과 전",
    cost: "결제대금의 3/18",
  },
];

const CLASS_DETAIL_INFO = [
  {
    key: "1",
    para: "수강기간이란 회사가 회원에게 유상으로 제공하는 클래스 이용기간으로서 90일을 의미합니다. 단, 개별 클래스에 따라 90일 미만의 수강기간이 제공될 수 있습니다.",
  },
  {
    key: "2",
    para: "수강기간은 결제일부터 시작합니다. 단, 결제일 당시 클래스영상을 이용할 수 없는 경우 수강기간은 클래스영상의 이용 가능일부터 시작합니다.",
  },
  {
    key: "3",
    para: "수강진도란 총 클래스영상 수 중 기 이용한 영상 수의 비율을 의미합니다. 단, 클래스영상 일부 재생 시 이용으로 간주합니다.",
  },
  {
    key: "4",
    para: "환불요청일 기준 수강기간과 수강진도 중 높은 값을 적용하여 환불금액을 산정합니다.",
  },
  {
    key: "5",
    para: "회원이 클래스와 함께 제공되는 자료 또는 정보를 다운로드하는 경우 해당 자료 또는 정보가 포함된 클래스영상을 이용한 것으로 간주합니다.",
  },
];
