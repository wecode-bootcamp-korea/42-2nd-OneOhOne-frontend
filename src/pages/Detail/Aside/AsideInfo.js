import React, { useState, useEffect } from "react";
import * as S from "./AsideInfo.style";

export const AsideInfo = () => {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    fetch("/data/Detail/getDetail.json")
      .then(res => res.json())
      .then(data => setLecture(data.data));
  }, []);
  if (!lecture.lectureId) return null;

  const star = lecture.review;

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

  const FormatPrice = Math.floor(lecture.lecturePrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <S.InfoContainer>
      <S.StickyBox>
        <S.Category>
          <div>{lecture.categoryName}</div>
          <div>•</div>
          <div>{lecture.creatorName}</div>
        </S.Category>
        <S.Title>{lecture.lectureName}</S.Title>
        <S.Status>{lecture.lectureStatus}</S.Status>
        <S.PriceBox>
          <S.Price>{FormatPrice}원</S.Price>/5개월 수강권
        </S.PriceBox>
        <S.GradeBox>
          <S.Icon alt="엄지척" src="images/Detail/Icon/thumbs-up-regular.png" />
          강의 만족도<S.Grade>{avgStar}/5점</S.Grade>
        </S.GradeBox>
        <S.IconButtons>
          {BUTTON_ICONS.map(icon => (
            <S.IconButton key={icon.id} alt={icon.alt} src={icon.img}>
              {icon.text}
            </S.IconButton>
          ))}
        </S.IconButtons>
        <S.Subscribe>구독하기</S.Subscribe>
        <S.Banner>
          <S.BannerText>
            <S.Ad>2,800개+ 클래스를 무제한 수강</S.Ad>
            <S.AdInfo>보고 계신 이 클래스도 포함되어 있어요!</S.AdInfo>
          </S.BannerText>
          <S.Logo>OneOhOne</S.Logo>
        </S.Banner>
      </S.StickyBox>
    </S.InfoContainer>
  );
};

const BUTTON_ICONS = [
  {
    id: 1,
    alt: "하트",
    img: "images/Detail/Icon/heart-regular.png",
    text: "좋아요수",
  },
  {
    id: 2,
    alt: "공유",
    img: "images/Detail/Icon/arrow-up-from-bracket-solid.png",
    text: " 공유하기",
  },
  {
    id: 3,
    alt: "선물",
    img: "images/Detail/Icon/gift-solid.png",
    text: "선물하기",
  },
];
