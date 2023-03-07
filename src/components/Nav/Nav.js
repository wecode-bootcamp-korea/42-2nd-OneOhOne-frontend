import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Nav.styled";
import { categories } from "./categories";

const Nav = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <S.NavBar>
      <S.NavMainDiv>
        <div>
          <S.NavTitleSpan>OneOhOne</S.NavTitleSpan>
          <S.NavCategorySpan
            onMouseEnter={handleDropdown}
            onMouseLeave={handleDropdown}
          >
            전체 카테고리 ▾
            {showDropdown && (
              <S.DropdownList>
                {categories.map(category => (
                  <S.DropdownItem key={category.id}>
                    {category.categoryName}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.NavCategorySpan>
          <S.NavInput type="text" placeholder="찾으시는 강의가 있나요?" />
        </div>
        <S.NavRightDiv>
          <span>크리에이터 센터</span>
          <span onClick={goLogin}>로그인</span>
        </S.NavRightDiv>
      </S.NavMainDiv>
    </S.NavBar>
  );
};

export default Nav;
