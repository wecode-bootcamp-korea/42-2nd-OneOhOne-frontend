import React from "react";
import * as S from "./Detail.style";
import { Menu } from "./Menu/Menu";
import { MenuDetails } from "./Menu/MenuDetails";
import { Thumbnail } from "./Thumbnail/Thumbnail";
import { AsideInfo } from "./Aside/AsideInfo";

const Detail = () => {
  return (
    <S.Page>
      <S.Main>
        <Thumbnail />
        <Menu />
        <S.InfoContainer>
          <MenuDetails />
          <AsideInfo />
        </S.InfoContainer>
      </S.Main>
    </S.Page>
  );
};

export default Detail;
