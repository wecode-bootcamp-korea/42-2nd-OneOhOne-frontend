import React, { useEffect, useRef, useState } from "react";
import ListMainCarousel from "./ListMainCarousel";
import { useNavigate } from "react-router-dom";
import { carouselData } from "./CarouselData";
import { GET_PRODUCT_API } from "../../config";
// import GET_PRODUCT_API from "../../config";
import * as S from "./List.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const onClickGoDetail = id => {
    navigate(`/detail/${id}`);
  };
  const slider = useRef(null);
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch(`${GET_PRODUCT_API}/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(data => setProductList(data.data));
  }, []);

  useEffect(() => {
    fetch("/data/listPage.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <S.MainCarouselDiv>
        <ListMainCarousel />
      </S.MainCarouselDiv>

      <div>
        {carouselData.map(product => {
          const { id, categoryName, categoryTitle } = product;
          const filteredProductList = productList.filter(
            sth => sth.categoryName === categoryName
          );

          return (
            <div key={id} style={{ width: "1200px", margin: "0 auto" }}>
              <S.ListCategoryTitle>{categoryTitle}</S.ListCategoryTitle>
              <S.SeeAllClassDiv>전체 클래스 보기</S.SeeAllClassDiv>
              <S.StyledSlider {...settings} ref={slider}>
                {filteredProductList.map(data => {
                  return (
                    <div
                      key={data.id}
                      onClick={() => {
                        onClickGoDetail(data.lectureId);
                      }}
                    >
                      <S.ListImgDiv>
                        <S.ListCategorySmallImg
                          src="/images/whitecart.png"
                          alt=""
                        />
                        <S.ListCategoryImg
                          src={data.lectureMainImageUrl}
                          alt=""
                        />
                      </S.ListImgDiv>

                      <S.ListTxtDiv>
                        <S.ListTxtName>{data.creatorName}</S.ListTxtName>
                        <S.ListTxtDescription>
                          {data.lectureDescription}
                        </S.ListTxtDescription>
                        <S.ListTxtPrice>{data.lecturePrice} 원</S.ListTxtPrice>
                      </S.ListTxtDiv>
                    </div>
                  );
                })}
              </S.StyledSlider>
            </div>
          );
        })}
      </div>
      <S.BottomBannerDiv>
        <S.BottomBanner>
          <S.BottomBannerTxt>
            <span>OneOhOne</span>
            <S.BottomBannerTxtSpan>
              위 모든 카테고리의 강의 하나하나에 정성을 담았습니다
            </S.BottomBannerTxtSpan>
          </S.BottomBannerTxt>
        </S.BottomBanner>
      </S.BottomBannerDiv>
    </>
  );
};

export default List;
