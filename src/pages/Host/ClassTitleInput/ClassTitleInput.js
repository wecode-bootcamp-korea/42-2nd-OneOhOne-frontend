import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as S from "./ClassTitleInput.style";

function ClassTitleInput({
  handleChange,
  handleShowNewCompTrue,
  inputValue,
  setVisible,
}) {
  const [isActive, setIsActive] = useState(false);

  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const handleClick = () => {
    handleShowNewCompTrue();
    setIsActive(true);

    const formData = new FormData();
    formData.append("lectureName", inputValue);

    axios({
      baseURL: "http://localhost:8080",
      url: "/upload",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log(response.data);
        // notify();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    const result = window.confirm(
      "저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?"
    );
    if (result) {
      setIsActive(true);
    }
  };
  return (
    <S.ClassTitleWrapper isActive={isActive}>
      <S.RecommendTitleContainer>
        <S.RecommendTitleHeader>
          <S.ImgInfoIcon src="https://cdn-icons-png.flaticon.com/128/64/64494.png" />
          <S.RecommendTitle>어떤 제목이 좋을까요?</S.RecommendTitle>
        </S.RecommendTitleHeader>
        <S.RecommendTitleDetail>
          <li>한국어/일본어는 28자 이하, 영어는 40byte 이하를 권장합니다.</li>
        </S.RecommendTitleDetail>
      </S.RecommendTitleContainer>
      <S.TitleInput
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="제목을 입력해주세요."
      />

      <S.BtnSection>
        <S.BtnContainer>
          <S.BackBtn onClick={handleCancel} isActive={isActive}>
            취소하기
          </S.BackBtn>
          <S.SubmitBtn
            onClick={() => {
              handleClick();
              notify();
            }}
          >
            저장하기
          </S.SubmitBtn>
        </S.BtnContainer>
      </S.BtnSection>
    </S.ClassTitleWrapper>
  );
}

export default ClassTitleInput;
