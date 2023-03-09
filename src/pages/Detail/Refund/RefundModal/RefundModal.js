import React from "react";
import { ClassRefund } from "./ClassRefund/ClassRefund";
import { CoachRefund } from "./CoachRefund/CoachRefund";
import { ProductRefund } from "./ProductRefund/ProductRefund";
import { NaverRefund } from "./NaverRefund/NaverRefund";
import { EtcRefund } from "./EtcRefund/EtcRefund";
import * as S from "./RefundModal.style";

export const RefundModal = ({ handleModal, modalOpen }) => {
  if (!modalOpen) return;

  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.ExitBox>
          <S.RefundTitle>환불정책</S.RefundTitle>
          <S.ExitBtn onClick={handleModal}>닫기 X</S.ExitBtn>
        </S.ExitBox>
        <S.RefundInfoContainer>
          <ClassRefund />
          <CoachRefund />
          <ProductRefund />
          <NaverRefund />
          <EtcRefund />
        </S.RefundInfoContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};
