import React from "react";
import * as S from "./Marketing.style";

function Marketing() {
  return (
    <S.MarketingSection>
      <S.MarketingLinkTitle>셀프 마케팅 주소</S.MarketingLinkTitle>
      <S.MarketingLinkWrapper>
        <S.MarketingLink>https://oneohone.page.link/123</S.MarketingLink>
        <S.LinkCopyBtn>주소 복사하기</S.LinkCopyBtn>
      </S.MarketingLinkWrapper>
    </S.MarketingSection>
  );
}

export default Marketing;
