import React from "react";
import { FOOTER_PLATFORMS } from "./FooterInfo";
import { FOOTER_INFO } from "./FooterInfo";
import { FOOTER_LEGALITIES } from "./FooterInfo";
import * as S from "./Footer.styled";
function Footer() {
  return (
    <S.FooterDiv>
      <S.Footer>
        <div>
          <S.PlatformsDiv>
            <S.PageInfoUl className="pageInfo">
              {FOOTER_PLATFORMS.map(platform => (
                <li key={platform.id}>
                  <S.LetterSpan className="linkInfo">
                    {platform.text}﹒
                  </S.LetterSpan>
                </li>
              ))}
            </S.PageInfoUl>
          </S.PlatformsDiv>
        </div>
        <div>
          <S.LegalitiesDiv>
            <S.PageInfoUl className="pageInfo">
              {FOOTER_LEGALITIES.map(legalitie => (
                <li key={legalitie.id}>
                  <S.LetterSpan className="linkInfo">
                    {legalitie.text}﹒
                  </S.LetterSpan>
                </li>
              ))}
            </S.PageInfoUl>
          </S.LegalitiesDiv>
          <S.InfoDiv>
            <S.PageInfoUl className="pageInfo">
              {FOOTER_INFO.map(info => (
                <li key={info.id}>
                  <span className="linkInfo">{info.text}﹒</span>
                </li>
              ))}
            </S.PageInfoUl>
          </S.InfoDiv>
        </div>
      </S.Footer>
    </S.FooterDiv>
  );
}

export default Footer;
