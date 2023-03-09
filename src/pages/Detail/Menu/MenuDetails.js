import React from "react";
import * as S from "./MenuDetails.style";
import { Review } from "../Review/Review";
import { Lecture } from "../Lecture/Lecture";
import { Curriculum } from "../Curriculum/Curriculum";
import { Creator } from "../Creator/Creator";
import { Refund } from "../Refund/Refund";

export const MenuDetails = () => {
  return (
    <S.Container>
      <div id="1">
        <Review />
      </div>
      <div id="2">
        <Lecture />
      </div>
      <div id="3">
        <Curriculum />
      </div>
      <div id="4">
        <Creator />
      </div>
      <div id="5">
        <Refund />
      </div>
    </S.Container>
  );
};
