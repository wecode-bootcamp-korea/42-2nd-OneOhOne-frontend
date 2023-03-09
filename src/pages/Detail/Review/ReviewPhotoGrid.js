import React, { useEffect, useState } from "react";
import * as S from "./ReviewPhotoGrid.style";

export const ReviewPhotoGrid = () => {
  const [reviewPhoto, setReviewPhoto] = useState([]);

  useEffect(() => {
    fetch("/data/Detail/getDetailMock.json")
      .then(res => res.json())
      .then(data => setReviewPhoto(data.data.review));
  }, []);

  const filteredData = reviewPhoto.slice(0, 4);

  return (
    <S.PhotoGrid>
      {filteredData.map(data => (
        <S.PhotoBox
          key={data.reviewId}
          alt="리뷰사진"
          src={data.reviewImageUrl}
        />
      ))}
    </S.PhotoGrid>
  );
};
