import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useConfirm } from "../../../utils.js/useConfirm";
import Button from "../components/Button";
import * as S from "./ClassDetailInfo.style";

function ClassDetailInfo({ setVisible }) {
  const [isActive, setIsActive] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [classDetailVisible, setClassDetailVisible] = useState(false);
  const [description, setDescription] = useState("");
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const deleteWord = () => {
    setVisible();
  };
  const abortWord = () => {
    return;
  };

  const confirmDelete = useConfirm(
    "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?",
    deleteWord,
    abortWord
  );

  const onSaveBtnClick = () => {
    const formData = new FormData();
    formData.append("lectureDescription", description);

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
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <S.ClassDetailInfoContainer>
      <S.ClassDetailInfoText>클래스 상세 정보</S.ClassDetailInfoText>

      <S.UploadSizeInfoContainer>
        <S.UploadSizeInfo>
          <S.SizeInfoIcon src="https://cdn-icons-png.flaticon.com/128/471/471713.png" />
          <S.UploadSize>
            이미지 개당 용량을 4mb 이하로 업로드 해주세요.
          </S.UploadSize>
        </S.UploadSizeInfo>
        <S.DetailDescription>
          크리에이터님의 정보들이 더욱 빠르게 제공될 수 있습니다.
        </S.DetailDescription>
      </S.UploadSizeInfoContainer>

      <S.ClassInfoContainer>
        <S.ClassInfoTitle>
          <S.ClassInfo>클래스 소개</S.ClassInfo>
          <S.Required>필수</S.Required>
        </S.ClassInfoTitle>
        <S.ClassDescriptionContainer>
          {colorChange ? (
            <S.ClassDescription>
              클래스에 대한 소개를 작성해주세요.
            </S.ClassDescription>
          ) : (
            <S.ClassDescriptionDefault>
              클래스에 대한 소개를 작성해주세요.
            </S.ClassDescriptionDefault>
          )}
          <S.CoverImgEditButton
            onClick={() => {
              setClassDetailVisible(!classDetailVisible);
              setColorChange(!colorChange);
            }}
          >
            {classDetailVisible ? (
              ""
            ) : (
              <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
            )}
          </S.CoverImgEditButton>
        </S.ClassDescriptionContainer>

        {classDetailVisible && (
          <div>
            <S.ClassIntroduce>
              <ReactQuill
                value={description}
                onChange={setDescription}
                setClassDetailVisible={() => {
                  setClassDetailVisible(false);
                }}
                style={{ height: "400px", marginBottom: "55px" }}
              />
            </S.ClassIntroduce>
            <Button
              setIsActive={setIsActive}
              confirmDelete={confirmDelete}
              isActive={isActive}
              onSaveBtnClick={onSaveBtnClick}
              notify={notify}
            />
          </div>
        )}
      </S.ClassInfoContainer>

      <S.InterviewContainer>
        <S.InterviewTitle>크리에이터 인터뷰</S.InterviewTitle>
        <S.InterviewDetailContainer>
          <S.InterviewDetail>
            인터뷰 질문은 최소 3개를 선택하여 답변해주세요.
          </S.InterviewDetail>
          <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
        </S.InterviewDetailContainer>
      </S.InterviewContainer>
    </S.ClassDetailInfoContainer>
  );
}

export default ClassDetailInfo;
