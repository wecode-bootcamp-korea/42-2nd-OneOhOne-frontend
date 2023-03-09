import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Nav.styled";
import { categories } from "./categories";
import { useRef } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isListPage = location.pathname === "/";

  const goLogin = () => {
    navigate("/login");
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const categoryRef = useRef([]);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryClick = height => {
    if (isListPage) {
      window.scrollTo({ top: height, behavior: "smooth" });
    }
  };

  return (
    <S.NavBar>
      <S.NavMainDiv>
        <div>
          <S.NavTitleSpan>OneOhOne</S.NavTitleSpan>
          {isListPage && (
            <S.NavCategorySpan
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              전체 카테고리 ▾
              {showDropdown && (
                <S.DropdownList>
                  {categories.map(category => (
                    <S.DropdownItem
                      key={category.id}
                      ref={el => (categoryRef.current[category.id] = el)}
                      onClick={() => handleCategoryClick(category.top)}
                    >
                      {category.categoryName}
                    </S.DropdownItem>
                  ))}
                </S.DropdownList>
              )}
            </S.NavCategorySpan>
          )}
          <S.NavInput type="text" placeholder="찾으시는 강의가 있나요?" />
        </div>
        <S.NavRightDiv>
          <span>크리에이터 센터</span>
          <S.LoginImg src="./images/enter.png" alt="" onClick={goLogin} />
        </S.NavRightDiv>
      </S.NavMainDiv>
    </S.NavBar>
  );
};

export default Nav;
