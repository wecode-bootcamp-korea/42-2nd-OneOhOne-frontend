import React from "react";
import * as S from "./NaverRefund.style";

export const NaverRefund = () => {
  return (
    <>
      {NAVER_DATA.map(data => (
        <>
          <S.RefundSubtitle>{data.title}</S.RefundSubtitle>
          {data.para.map(data => (
            <S.DetailContainer key={data.key}>
              <div>·</div>
              <S.DetailItem>{data.info}</S.DetailItem>
            </S.DetailContainer>
          ))}
        </>
      ))}
    </>
  );
};

const NAVER_DATA = [
  {
    title: "네이버페이 환불",
    para: [
      {
        key: "1",
        info: "간편 신용카드/체크카드 : 취소 완료 후 3~5영업일 이후 환불(승인/매입 구분 불가)",
      },
      {
        key: "1",
        info: "간편 계좌이체 : 취소 완료 즉시 환불(단, 은행 정기점검시간등에는 환불 실패)",
      },
      { key: "1", info: "포인트 : 취소 완료 즉시 환불" },
    ],
  },
];
