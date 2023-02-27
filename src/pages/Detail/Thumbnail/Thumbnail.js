import React, { useEffect, useState } from "react";
import * as S from "./Thumbnail.style";

export const Thumbnail = () => {
  const [thumbnail, setThumbnail] = useState({});

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setThumbnail(data.data));
  }, []);
  console.log(thumbnail);

  return (
    <S.ThumbnailLayout>
      {thumbnail.lectureId && (
        <>
          <S.HighlightLayout>
            <S.HighlightThumbnail
              key={thumbnail.detailImages[0]?.detailImageLectureId}
              alt="thumbnail"
              src={thumbnail.detailImages[0]?.detailImageUrl}
            />
          </S.HighlightLayout>
          <S.AdditionalLayout>
            <S.AdditionalThumbnail
              key={thumbnail.detailImages[1]?.detailImageLectureId}
              alt="thumbnail"
              src={thumbnail.detailImages[1]?.detailImageUrl}
            />
            <S.AdditionalThumbnail
              key={thumbnail.detailImages[2]?.detailImageLectureId}
              alt="thumbnail"
              src={thumbnail.detailImages[2]?.detailImageUrl}
            />
            <S.ThumbnailButton>+2개의 이미지</S.ThumbnailButton>
          </S.AdditionalLayout>
        </>
      )}
    </S.ThumbnailLayout>
  );
};
