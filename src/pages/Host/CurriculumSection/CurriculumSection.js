import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useConfirm } from "../../../utils.js/useConfirm";
import Button from "../components/Button";
import Curriculum from "../Curriculum/Curriculum";
import * as S from "./CurriculumSection.style";

const initialCurriculum = {
  id: 1,
  chapter: "",
  video1: "",
  video2: "",
  title1: "",
  title2: "",
};

function CurriculumSection({ chapter }) {
  const [isActive, setIsActive] = useState(false);

  const [videoBoxList, setVideoBoxList] = useState([]);
  const [curriculums, setCurriculums] = useState([initialCurriculum]);
  console.log(curriculums);
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const nextCurriculumId = useRef(2);

  const onUploadVideo = e => {};

  const curriculumAdd = () => {
    setCurriculums([
      ...curriculums,
      { ...initialCurriculum, id: nextCurriculumId.current },
    ]);
    nextCurriculumId.current += 1;
  };

  const handleCurriculumChange = (targetId, objKey, value) => {
    setCurriculums(
      curriculums.map(curriculum =>
        curriculum.id === targetId
          ? { ...curriculum, [objKey]: value }
          : curriculum
      )
    );
  };

  const deleteWord = () => {
    return;
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
    curriculums.forEach(({ video1, video2, title1, title2 }) => {
      if (video1 !== "") {
        formData.append("videoUrl", video1);
      }

      if (video2 !== "") {
        formData.append("videoUrl", video2);
      }

      if (title2 !== "") {
        formData.append("curriculumChapterName", title1);
      }

      if (title2 !== "") {
        formData.append("curriculumChapterName", title2);
      }
    });
    formData.append("curriculumChapterName", { chapter });

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
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      {curriculums.map(curriculum => (
        <Curriculum
          key={curriculum.id}
          id={curriculum.id}
          curriculum={curriculum}
          handleCurriculumChange={handleCurriculumChange}
        />
      ))}
      <S.CoverAddBtnContainer onClick={curriculumAdd}>
        <S.AddBtnSection>
          <S.CoverAddBtn
            src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
            alt="추가 버튼"
          />
          <S.CoverAddText>챕터 추가하기</S.CoverAddText>
        </S.AddBtnSection>
      </S.CoverAddBtnContainer>

      {/* <Button
        setIsActive={setIsActive}
        confirmDelete={confirmDelete}
        isActive={isActive}
        onSaveBtnClick={onSaveBtnClick}
        notify={notify}
        style={{ width: "300px" }}
      /> */}
    </>
  );
}

export default CurriculumSection;
