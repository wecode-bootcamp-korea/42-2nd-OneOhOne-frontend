import React from "react";
import * as S from "./Side.style";

function Side() {
  return (
    <S.SideWrapper>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.NoticeWrapper>
            <S.NoticeIcon src="https://cdn-icons-png.flaticon.com/128/6769/6769135.png" />
            <S.Notice>공지사항</S.Notice>
          </S.NoticeWrapper>
          <S.CreatorWrapper>
            <S.CreatorIcon src="https://cdn-icons-png.flaticon.com/128/747/747376.png" />
            <S.CreatorInfo>크리에이터 정보</S.CreatorInfo>
          </S.CreatorWrapper>
        </S.InfoWrapper>
        <S.ItemWrapper>
          {CLASS_TOOL_LIST.map(category => (
            <S.ProductWrapper
              key={category.id}
              style={{ width: category.width }}
            >
              <S.ProductIcon src={category.icon} />
              <S.SideCategory
                style={{
                  marginTop: category.marginTop,
                  fontSize: category.fontSize,
                }}
              >
                {category.category}
                {category.label}
              </S.SideCategory>
            </S.ProductWrapper>
          ))}
        </S.ItemWrapper>

        <S.ServiceWrapper>
          {CLASS_MANAGE_LIST.map(category => (
            <S.ProductWrapper
              key={category.id}
              style={{ width: category.width }}
            >
              <S.ProductIcon src={category.icon} />
              <S.SideCategory
                style={{
                  marginTop: category.marginTop,
                  fontSize: category.fontSize,
                }}
              >
                {category.category}
                {category.label}
              </S.SideCategory>
            </S.ProductWrapper>
          ))}
        </S.ServiceWrapper>

        <S.HostWrapper>
          <S.BlogWrapper>
            <S.BlogIcon src="https://cdn-icons-png.flaticon.com/128/4922/4922073.png" />
            <S.Blog>크리에이터 블로그</S.Blog>
          </S.BlogWrapper>

          <S.GuideWrapper>
            <S.GuideIcon src="https://cdn-icons-png.flaticon.com/128/1545/1545757.png" />
            <S.Guide>크리에이터 가이드 센터</S.Guide>
          </S.GuideWrapper>
        </S.HostWrapper>
      </S.Wrapper>
    </S.SideWrapper>
  );
}

export default Side;

export const CLASS_TOOL_LIST = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/747/747327.png",
    category: "상품",
    width: "80px",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/0/375.png",
    category: "클래스",
    width: "95px",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/1001/1001371.png",
    category: "코칭권 관리",
    width: "130px",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/3446/3446795.png",
    category: "성과 분석",
    width: "113px",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/128/3260/3260867.png",
    category: "OneOhOne+ 초대",
    width: "177px",
  },
];

export const CLASS_MANAGE_LIST = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/153/153194.png",
    category: "파일 요청 내역",
    width: "150px",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/1950/1950321.png",
    category: "주문 및 배송",
    width: "137px",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/3155/3155595.png",
    category: "재고",
    width: "83px",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/3138/3138788.png",
    category: "성과 분석",
    width: "119px",
  },
];
