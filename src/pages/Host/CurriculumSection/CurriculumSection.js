import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useConfirm } from "../../../utils.js/useConfirm";
import Button from "../components/Button";
import * as S from "./CurriculumSection.style";

function CurriculumSection() {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoBoxList, setVideoBoxList] = useState([]);
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const onUploadImgBtnClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const onUploadImg = e => {
    if (!e.target.files) {
      return;
    }
    const video = e.target.files[0];
    setSelectedVideo(URL.createObjectURL(video));
  };

  const chapterAdd = () => {};

  const deleteWord = () => {
    //setVisible();
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
    videoBoxList.forEach(video => {
      formData.append("detailImagesUrl", videoBoxList);
    });

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
      <S.CurriculumContainer>
        <S.Curriculum>커리큘럼</S.Curriculum>
        <S.ChapterInput
          type="text"
          // value={inputValue}
          // onChange={priceHandleChange}
          placeholder="제목을 입력해주세요."
        />

        <S.VideoAddContainer onClick={onUploadImgBtnClick}>
          <S.VideoAddText>강의 1 영상을 첨부해주세요.</S.VideoAddText>
          <S.VideoAddBtn
            multiple={false}
            type="file"
            accept="video/*"
            ref={inputRef}
            onChange={onUploadImg}
          />
        </S.VideoAddContainer>
        <S.VideoAddContainer onClick={onUploadImgBtnClick}>
          <S.VideoAddText>강의 2 영상을 첨부해주세요.</S.VideoAddText>
          <S.VideoAddBtn
            multiple={false}
            type="file"
            accept="video/*"
            ref={inputRef}
            onChange={onUploadImg}
          />
        </S.VideoAddContainer>

        <S.TitleAddText>강의 1 제목을 입력해주세요.</S.TitleAddText>
        <S.TitleAddText>강의 2 제목을 입력해주세요.</S.TitleAddText>

        {selectedVideo && <div>선택된 파일 : {selectedVideo.name}</div>}
      </S.CurriculumContainer>

      <S.CoverAddBtnContainer onClick={chapterAdd}>
        <S.AddBtnSection>
          <S.CoverAddBtn
            src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
            alt="추가 버튼"
          />
          <S.CoverAddText>챕터 추가하기</S.CoverAddText>
        </S.AddBtnSection>
      </S.CoverAddBtnContainer>

      <Button
        setIsActive={setIsActive}
        confirmDelete={confirmDelete}
        isActive={isActive}
        onSaveBtnClick={onSaveBtnClick}
        notify={notify}
        style={{ width: "auto" }}
      />
    </>
  );
}

export default CurriculumSection;
