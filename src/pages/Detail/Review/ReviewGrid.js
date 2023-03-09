import React, { useEffect, useState } from "react";
import * as S from "./ReviewGrid.style";

export const ReviewGrid = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/data/Detail/getDetailMock.json")
      .then(res => res.json())
      .then(data => setReview(data.data.review));
  }, []);

  const filteredData = review.slice(0, 8);

  return (
    <S.ReviewGrids>
      {filteredData.map(data => (
        <S.GridBox key={data.reviewId}>
          <S.GridContents>
            <S.ReviewImg
              alt='"'
              src="/images/Detail/Icon/quote-left-solid.png"
            />
            <S.ReviewBody>{data.reviewDescription}</S.ReviewBody>
            <S.ReviewWriter>{data.reviewUserName}</S.ReviewWriter>
          </S.GridContents>
        </S.GridBox>
      ))}
    </S.ReviewGrids>
  );
};
