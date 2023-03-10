import React, { useRef, useState } from "react";
import * as S from "./Curriculum.style";

function Curriculum({ curriculum, handleCurriculumChange }) {
  const { id, chapter, title1, title2 } = curriculum;
  const [video1Uploaded, setVideo1Uploaded] = useState(false);
  const [video2Uploaded, setVideo2Uploaded] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const onUploadVideo1BtnClick = () => {
    if (!inputRef1.current) {
      return;
    }
    inputRef1.current.click();
  };

  const onUploadVideo2BtnClick = () => {
    if (!inputRef2.current) {
      return;
    }
    inputRef2.current.click();
  };

  const onUploadVideo1 = e => {
    if (!e.target.files) {
      return;
    }
    const video = e.target.files[0];
    handleCurriculumChange(id, "video1", video);
    setVideo1Uploaded(true);
  };

  const onUploadVideo2 = e => {
    if (!e.target.files) {
      return;
    }
    const video = e.target.files[0];
    handleCurriculumChange(id, "video2", video);
    setVideo2Uploaded(true);
  };

  const onInputTextChange = e =>
    handleCurriculumChange(id, e.target.name, e.target.value);

  return (
    <S.CurriculumContainer>
      <S.Curriculum>커리큘럼</S.Curriculum>
      <S.ChapterInput
        type="text"
        value={chapter}
        name="chapter"
        onChange={onInputTextChange}
        placeholder="챕터명을 입력해주세요."
      />

      <S.VideoAddContainer onClick={onUploadVideo1BtnClick}>
        <S.VideoAddText>
          {video1Uploaded
            ? "파일이 첨부되었습니다."
            : "강의 1 영상을 첨부해주세요."}
        </S.VideoAddText>
        <S.VideoAddBtn
          multiple={false}
          type="file"
          accept="video/*"
          ref={inputRef1}
          onChange={onUploadVideo1}
        />
      </S.VideoAddContainer>
      <S.VideoAddContainer onClick={onUploadVideo2BtnClick}>
        <S.VideoAddText>
          {video2Uploaded
            ? "파일이 첨부되었습니다."
            : "강의 2 영상을 첨부해주세요."}
        </S.VideoAddText>
        <S.VideoAddBtn
          multiple={false}
          type="file"
          accept="video/*"
          ref={inputRef2}
          onChange={onUploadVideo2}
        />
      </S.VideoAddContainer>

      <S.TitleAddText
        value={title1}
        placeholder="강의 1 제목을 입력해주세요."
        name="title1"
        onChange={onInputTextChange}
      />
      <S.TitleAddText
        value={title2}
        placeholder="강의 2 제목을 입력해주세요."
        name="title2"
        onChange={onInputTextChange}
      />
    </S.CurriculumContainer>
  );
}

export default Curriculum;
