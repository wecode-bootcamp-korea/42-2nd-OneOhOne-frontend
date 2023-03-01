import React from "react";
import { ToastContainer } from "react-toastify";
import * as S from "../CoverImgInput/CoverImgInput.style";

const Button = ({
  setIsActive,
  confirmDelete,
  isActive,
  onSaveBtnClick,
  notify,
}) => {
  return (
    <S.BtnSection>
      <S.BtnContainer>
        <S.BackBtn
          onClick={() => {
            setIsActive(!isActive);
            confirmDelete();
          }}
          isActive={isActive}
        >
          취소하기
        </S.BackBtn>
        <S.SubmitBtn
          type="button"
          onClick={() => {
            onSaveBtnClick();
            notify();
          }}
        >
          저장하기
          <ToastContainer
            position="top-center"
            hideProgressBar="true"
            autoClose="1000"
          />
        </S.SubmitBtn>
      </S.BtnContainer>
    </S.BtnSection>
  );
};

export default Button;
