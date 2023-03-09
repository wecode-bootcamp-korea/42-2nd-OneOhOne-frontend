import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useConfirm } from "../../../utils.js/useConfirm";
import Button from "../components/Button";
import * as S from "./CreatorInfo.style";

function CreatorInfo() {
  const [isActive, setIsActive] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [creatorInfoVisible, setCreatorInfoVisible] = useState(false);
  const [creatorInfo, setCreatorInfo] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const deleteWord = () => {
    setCreatorInfoVisible();
  };

  const abortWord = () => {
    return;
  };

  const confirmDelete = useConfirm(
    "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?",
    deleteWord,
    abortWord
  );

  const creatorInfoHandleChange = e => {
    setCreatorInfo(e.target.value);
  };

  useEffect(() => {
    fetch("API", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(res => res.json())
      .then(data => setCreatorName(data));
  }, []);

  return (
    <S.CreatorInfoContainer>
      <S.CreatorIntoTtitle>크리에이터 기본 정보</S.CreatorIntoTtitle>

      <S.ProfileImgContainer>
        <S.ProfileImgTitle>프로필 사진</S.ProfileImgTitle>
        <S.ProfileImg src="https://cdn-icons-png.flaticon.com/128/201/201634.png" />
        <S.ImgEditIcon src="https://cdn-icons-png.flaticon.com/128/711/711191.png" />
      </S.ProfileImgContainer>

      <S.CreatorNameContainer>
        <S.CreatorNameTitle>크리에이터 닉네임</S.CreatorNameTitle>
        <S.CreatorName>데이터</S.CreatorName>
        {/* <S.CreatorName>{creatorName}</S.CreatorName> */}
      </S.CreatorNameContainer>

      <S.CreatorIntroduceContainer>
        <S.CreatorIntroduce>
          <S.CreatorIntroduceTitle>크리에이터 소개</S.CreatorIntroduceTitle>
          <S.Required>필수</S.Required>
        </S.CreatorIntroduce>
        <S.CreatorIntroduceDetail>
          {colorChange ? (
            <S.CreatorIntroduceDescription>
              크리에이터 소개를 작성해주세요.
            </S.CreatorIntroduceDescription>
          ) : (
            <S.CreatorIntroduceDefault>
              크리에이터 소개를 작성해주세요.
            </S.CreatorIntroduceDefault>
          )}

          <S.CoverImgEditButton
            onClick={() => {
              setCreatorInfoVisible(!creatorInfoVisible);
              setColorChange(!colorChange);
            }}
          >
            {creatorInfoVisible ? (
              ""
            ) : (
              <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
            )}
          </S.CoverImgEditButton>
          {creatorInfoVisible && (
            <div>
              <S.CreatorIntroduce>
                <ReactQuill
                  onchange={creatorInfoHandleChange}
                  value={creatorInfo}
                  setCreatorInfoVisible={() => {
                    setCreatorInfoVisible(false);
                  }}
                />
              </S.CreatorIntroduce>
              <Button
                setIsActive={setIsActive}
                confirmDelete={confirmDelete}
                isActive={isActive}
                // onSaveBtnClick={onSaveBtnClick}
                notify={notify}
              />
            </div>
          )}
        </S.CreatorIntroduceDetail>
      </S.CreatorIntroduceContainer>

      <S.ContactContainer>
        <S.ContactTitle>연락처</S.ContactTitle>
        <S.ContactNumber>010-1234-5678</S.ContactNumber>
      </S.ContactContainer>

      <S.SocialContainer>
        <S.SocialTitle>채널(소셜 미디어) 계정</S.SocialTitle>
        <S.SocialDetail>
          <S.SocialDescription>
            유튜브, 인스타그램, 페이스북 등의 주소를 입력해주세요.
          </S.SocialDescription>
          <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
        </S.SocialDetail>
      </S.SocialContainer>
    </S.CreatorInfoContainer>
  );
}

export default CreatorInfo;
