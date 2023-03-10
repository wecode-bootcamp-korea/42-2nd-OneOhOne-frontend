import React, { useState } from "react";
import CoverImgInput from "../CoverImgInput/CoverImgInput";
import CoverGalleryInput from "../CoverGalleryInput/CoverGalleryInput";
import ClassTitleInput from "../ClassTitleInput/ClassTitleInput";
import CategoryList from "../CategoryList/CategoryList";
import * as S from "./ClassBasicInfo.style";

function ClassBasicInfo() {
  const [visible, setVisible] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [categoryColorChange, setCategoryColorChange] = useState(false);
  const [priceColorChange, setPriceColorChange] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);
  const [selectedCoverImg, setSelectedCoverImg] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState("");
  const [showNewComponent, setShowNewComponent] = useState(false);

  const [showNewPrice, setShowNewPrice] = useState(false);

  const [displayImgAddTitleInput, setDisplayImgAddTitleInput] =
    useState("block");

  const [selectedCoverGallery, setSelectedCoverGallery] = useState([]);

  // [{src: null}, {src: null}]

  const onUploadImg = e => {
    if (!e.target.files) {
      return;
    }
    const image = e.target.files[0];
    setSelectedCoverImg(URL.createObjectURL(image));
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    setShowNewComponent(false);
  };

  const handleShowNewCompTrue = () => {
    setShowNewComponent(true);
  };

  const priceHandleChange = e => {
    setPriceInputValue(e.target.value);
    setShowNewPrice(false);
  };

  const handleShowNewPrice = () => {
    setShowNewPrice(true);
  };

  // const onSaveBtnClick = () => {
  //   const formData = new FormData();
  //   formData.append("lectureMainImageUrl", selectedCoverImg);
  //   formData.append("detailImagesUrl", selectedCoveGallery);
  //   formData.append("lectureName");
  //   formData.append("categoryName", selectedCoverImg);
  //   formData.append("lectureMainImageUrl", selectedCoverImg);

  //   axios({
  //     baseURL: "http://localhost:8080",
  //     url: "/upload",
  //     method: "POST",
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });

  //   setVisible(false);
  // };

  return (
    <S.BasicInfoContainer>
      <S.BasicTitle>클래스 기본 정보</S.BasicTitle>
      <S.CoverImgContainer>
        <S.CoverImgText>커버 이미지</S.CoverImgText>
        <S.Required>필수</S.Required>
      </S.CoverImgContainer>
      {displayImgAddTitleInput === "none" && selectedCoverImg != null && (
        <img src={selectedCoverImg} alt="커버 이미지" />
      )}

      <S.CoverImgAddContainer>
        <S.CoverImgAdd>
          {colorChange ? (
            <S.ImgAddTitleInput style={{ display: displayImgAddTitleInput }}>
              커버로 사용할 이미지를 추가해주세요.
            </S.ImgAddTitleInput>
          ) : (
            <S.ImgAddTitleDefault style={{ display: displayImgAddTitleInput }}>
              커버로 사용할 이미지를 추가해주세요.
            </S.ImgAddTitleDefault>
          )}
          <S.CoverImgEditButton
            onClick={() => {
              setVisible(!visible);
              setColorChange(!colorChange);
            }}
          >
            {visible ? (
              ""
            ) : (
              <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
            )}
          </S.CoverImgEditButton>
        </S.CoverImgAdd>

        {visible && (
          <CoverImgInput
            selectedCoverImg={selectedCoverImg}
            setSelectedCoverImg={setSelectedCoverImg}
            visible={visible}
            setVisible={setVisible}
            setDisplayImgAddTitleInput={setDisplayImgAddTitleInput}
            onUploadImg={onUploadImg}
          />
        )}
      </S.CoverImgAddContainer>

      <S.CoverGalleryContainer>
        <S.CoverGalleryText>커버 갤러리</S.CoverGalleryText>
        <S.CoverGalleryAddContainer>
          <S.CoverGalleryAdd>
            {colorChange ? (
              <S.CoverGalleryDescription>
                페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상
                추가해주세요.
              </S.CoverGalleryDescription>
            ) : (
              <S.CoverGalleryDescriptionDefault>
                페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상
                추가해주세요.
              </S.CoverGalleryDescriptionDefault>
            )}
            <S.CoverGalleryEditButton
              onClick={() => {
                setGalleryVisible(!galleryVisible);
                setColorChange(!colorChange);
              }}
            >
              {galleryVisible ? (
                ""
              ) : (
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              )}
            </S.CoverGalleryEditButton>
          </S.CoverGalleryAdd>

          {galleryVisible && (
            <CoverGalleryInput
              selectedCoverGallery={selectedCoverGallery}
              setSelectedCoverGallery={setSelectedCoverGallery}
              setVisible={() => {
                setGalleryVisible(false);
              }}
            />
          )}
        </S.CoverGalleryAddContainer>
      </S.CoverGalleryContainer>

      <S.ClassTitleContainer>
        <S.TitleContainer>
          <S.ClassTitle>클래스 제목</S.ClassTitle>
          <S.Required>필수</S.Required>
        </S.TitleContainer>

        <S.TitleAddContainer>
          <S.ClassTitleAdd>
            {showNewComponent && (
              <S.NewTitleWrapper>
                <S.NewClassTitle>{inputValue}</S.NewClassTitle>
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              </S.NewTitleWrapper>
            )}
            {!showNewComponent &&
              (colorChange ? (
                <S.ClassTitleDescription>
                  클래스를 대표할 수 있는 제목을 추가해주세요.
                </S.ClassTitleDescription>
              ) : (
                <S.ClassTitleDescriptionDefault>
                  클래스를 대표할 수 있는 제목을 추가해주세요.
                </S.ClassTitleDescriptionDefault>
              ))}

            <S.CoverImgEditButton
              onClick={() => {
                setTitleVisible(!titleVisible);
                setColorChange(!colorChange);
              }}
            >
              {titleVisible ? (
                ""
              ) : (
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              )}
            </S.CoverImgEditButton>
          </S.ClassTitleAdd>

          {titleVisible && (
            <ClassTitleInput
              handleChange={handleChange}
              handleShowNewCompTrue={handleShowNewCompTrue}
              inputValue={inputValue}
            />
          )}
        </S.TitleAddContainer>
      </S.ClassTitleContainer>

      <S.PriceContainer>
        <S.ClassTitle>수강료</S.ClassTitle>
        <S.PriceAddContainer>
          <S.PriceAdd>
            {showNewPrice && (
              <S.NewPriceWrapper>
                <S.NewPrice>{priceInputValue}</S.NewPrice>
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              </S.NewPriceWrapper>
            )}
            {!showNewPrice &&
              (priceColorChange ? (
                <S.PriceDescription>수강료를 입력해주세요.</S.PriceDescription>
              ) : (
                <S.PriceDescriptionDefault>
                  수강료를 입력해주세요.
                </S.PriceDescriptionDefault>
              ))}

            <S.CoverImgEditButton
              onClick={() => {
                setPriceVisible(!priceVisible);
                setPriceColorChange(!priceColorChange);
              }}
            >
              {priceVisible ? (
                ""
              ) : (
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              )}
            </S.CoverImgEditButton>
          </S.PriceAdd>

          {priceVisible && (
            <S.PriceInputBox
              type="text"
              handleChange={priceHandleChange}
              value={priceInputValue}
              onChange={priceHandleChange}
              placeholder="수강료를 입력해주세요."
            />
          )}
        </S.PriceAddContainer>
      </S.PriceContainer>

      <S.CategoryContainer>
        <S.CategoryTitleContainer>
          <S.CategoryTItle>카테고리</S.CategoryTItle>
          <S.Required>필수</S.Required>
        </S.CategoryTitleContainer>

        <S.CategoryAddContainer>
          <S.CategoryAdd>
            {categoryColorChange ? (
              <S.CategoryDescription>
                분야를 선택해주세요.
              </S.CategoryDescription>
            ) : (
              <S.CategoryDescriptionDefault>
                분야를 선택해주세요.
              </S.CategoryDescriptionDefault>
            )}

            <S.CategoryEditButton
              onClick={() => {
                setCategoryVisible(!categoryVisible);
                setCategoryColorChange(!categoryColorChange);
              }}
            >
              {categoryVisible ? (
                ""
              ) : (
                <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
              )}
            </S.CategoryEditButton>
          </S.CategoryAdd>

          <S.CategoryDetail />
          {categoryVisible && <CategoryList />}
        </S.CategoryAddContainer>
      </S.CategoryContainer>

      <S.ClassDetailContainer>
        <S.ClassDetailCategory>클래스 상세 카테고리</S.ClassDetailCategory>
        <S.DetailContainer>
          <S.DetailCategoryDescription>
            커리큘럼을 모두 포괄하는 하나의 카테고리를 작성해주세요.
          </S.DetailCategoryDescription>
          <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
        </S.DetailContainer>
      </S.ClassDetailContainer>
      <S.ClassLevelContainer>
        <S.ClassLevel>클래스 난이도</S.ClassLevel>
        <S.ClassLevelDetail>
          <S.ClassLevelDescription>
            어느 역량의 수강생을 위한 클래스인지 선택해주세요.
          </S.ClassLevelDescription>
          <S.EditIcon src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" />
        </S.ClassLevelDetail>
      </S.ClassLevelContainer>
    </S.BasicInfoContainer>
  );
}

export default ClassBasicInfo;
