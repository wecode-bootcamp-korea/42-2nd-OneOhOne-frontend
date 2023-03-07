import React, { useEffect, useState } from "react";
import * as S from "./Review.style";
import { ReviewGrid } from "./ReviewGrid";
import { ReviewPhotoGrid } from "./ReviewPhotoGrid";

export const Review = () => {
  const [star, setStar] = useState("");

  useEffect(() => {
    fetch("/data/Detail/getDetailMock.json")
      .then(res => res.json())
      .then(data => setStar(data.data.review));
  }, []);

  const reviewStar = [];
  for (let data of star) {
    reviewStar.push(data.reviewStar);
  }

  const avgStar = reviewStar.reduce((accumulator, current, index) => {
    if (index === reviewStar.length - 1) {
      return ((accumulator + current) / reviewStar.length).toFixed(1);
    }
    return accumulator + current;
  }, 0);

  return (
    <S.DetailContainer>
      <S.Title>실제 수강생들의 생생한 스토리</S.Title>
      <S.Summary>
        <S.Reviews>
          <S.ReviewHeading>클래스 한줄평</S.ReviewHeading>
          <S.ReviewNumber>1,677</S.ReviewNumber>
        </S.Reviews>
        <S.Reviews>
          <S.ReviewHeading>수강생 만족도</S.ReviewHeading>
          <S.ReviewNumber>95%</S.ReviewNumber>
        </S.Reviews>
      </S.Summary>
      <ReviewGrid />
      <S.Subtitle>실제 수강생 후기</S.Subtitle>
      <S.RealReview>
        <S.StarBox>
          <S.Star alt="별점" src="/images/Detail/Icon/star-solid.png" />
          <S.Grade>{avgStar}</S.Grade>
          <S.GradeNumber>총 {reviewStar.length}개</S.GradeNumber>
        </S.StarBox>
        <ReviewPhotoGrid />
      </S.RealReview>
    </S.DetailContainer>
  );
};
