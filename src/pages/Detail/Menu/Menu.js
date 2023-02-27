import React from "react";
import * as S from "./Menu.style";
import { Link } from "react-scroll";

export const Menu = () => {
  return (
    <S.MenuLayout>
      <S.Categories>
        {CATEGORY_DATA.map(data => (
          <Link key={data.id} to={data.linkTo} spy={true} smooth={true}>
            <span>{data.category}</span>
          </Link>
        ))}
      </S.Categories>
    </S.MenuLayout>
  );
};

const CATEGORY_DATA = [
  { id: 1, linkTo: 1, category: "후기" },
  { id: 2, linkTo: 2, category: "클래스 소개" },
  { id: 3, linkTo: 3, category: "커리큘럼" },
  { id: 4, linkTo: 4, category: "크리에이터" },
];
