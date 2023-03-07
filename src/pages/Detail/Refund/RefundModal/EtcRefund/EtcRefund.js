import React from "react";
import * as S from "./EtcRefund.style";

export const EtcRefund = () => {
  return (
    <>
      {ETC_DATA.map(data => (
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

const ETC_DATA = [
  {
    title: "기타 사항",
    para: [
      {
        info: "회사가 마케팅, 이벤트 등과 관련하여 무상으로 부여하는 추가 이용기간(보너스기간)은 환불에 영향을 미치지 아니합니다.",
      },
      {
        info: "회사는 환불 시 금융거래수수료, 제세공과금 등을 공제할 수 있습니다.",
      },
      {
        info: "회사는 회원이 관계 법령 또는 이용약관 등을 위반한 경우 이용약관 및 정책에 따라 환불을 거부할 수 있습니다.",
      },
      {
        info: "결합 상품의 경우 각 구성 상품(용역)의 환불 조건에 의하되 개별 상품 안내페이지를 통하여 고지합니다.",
      },
    ],
  },
];
