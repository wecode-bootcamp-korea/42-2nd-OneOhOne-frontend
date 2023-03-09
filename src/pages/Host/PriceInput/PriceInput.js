import React, { useState } from "react";
import * as S from "./PriceInput.style";

function PriceInput({ handleChange, handleShowNewCompTrue, priceInputValue }) {
  const [isActive, setIsActive] = useState(false);

  const priceHandleClick = () => {
    // pricehandleShowNewCompTrue();
    setIsActive(true);

    fetch("API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        //
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
      });
  };

  const priceHandleCancel = () => {
    const result = window.confirm(
      "저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?"
    );
    if (result) {
      setIsActive(true);
    }
  };

  return (
    <S.PriceWrapper isActive={isActive}>
      <S.PriceInput
        type="text"
        value={priceInputValue}
        // onChange={priceHandleChange}
        placeholder="제목을 입력해주세요."
      />
      <S.BtnSection>
        <S.BtnContainer>
          <S.BackBtn onClick={priceHandleCancel} isActive={isActive}>
            취소하기
          </S.BackBtn>
          <S.SubmitBtn onClick={priceHandleClick}>저장하기</S.SubmitBtn>
        </S.BtnContainer>
      </S.BtnSection>
    </S.PriceWrapper>
  );
}

export default PriceInput;
