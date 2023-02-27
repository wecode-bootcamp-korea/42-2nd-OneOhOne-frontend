import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ListMainCarousel.style";

const ListMainCarousel = () => {
  const [bannerList, setBannerList] = useState([]);
  const slider1 = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  useEffect(() => {
    fetch("/data/mainBanner.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(({ data }) => {
        setBannerList(data);
      });
  }, []);
  return (
    <div>
      <div>
        <Slider ref={slider1} {...settings}>
          {bannerList.map(product => (
            <div key={product.id}>
              <S.ListBackImg alt="" src={product.lectureMainImageUrl} />
              <S.ListMainImgH3>
                <S.ListImg alt="" src={product.lectureMainImageUrl} />
                <S.ListTxtDiv>
                  <S.ListTxtSpan>{product.lectureBannerTxt}</S.ListTxtSpan>
                  <S.ListMiniTxt>{product.lectureTxtDescription}</S.ListMiniTxt>
                </S.ListTxtDiv>
              </S.ListMainImgH3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ListMainCarousel;
