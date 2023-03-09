import React, { useState } from "react";
import { RefundModal } from "./RefundModal/RefundModal";
import * as S from "./Refund.style";

export const Refund = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    document.body.style.overflow = modalOpen ? "auto" : "hidden";
    setModalOpen(!modalOpen);
  };

  return (
    <S.RefundContainer>
      <S.Title>환불정책</S.Title>
      <S.RefundBox>
        <S.RefundInfo>
          환불 정책에 따라 구매일로부터 90일까지 환불 요청이 가능하며,
          <S.Highlight> 7일 까지 </S.Highlight>
          전액 환불이 가능합니다.
        </S.RefundInfo>
        <S.RefundBtn onClick={handleModal}>전체 환불 정책 보기 ></S.RefundBtn>
        {modalOpen ? (
          <RefundModal modalOpen={modalOpen} handleModal={handleModal} />
        ) : null}
      </S.RefundBox>
    </S.RefundContainer>
  );
};
