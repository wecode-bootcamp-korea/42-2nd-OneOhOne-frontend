import React, { useState } from "react";
import { useConfirm } from "../../../utils.js/useConfirm";
import { toast } from "react-toastify";
import Button from "../components/Button";
import axios from "axios";
import * as S from "./CategoryList.style";

function CategoryList({ setVisible }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const notify = () => toast.success("성공적으로 저장되었습니다.");

  const deleteWord = () => {
    setVisible();
  };
  const abortWord = () => {
    return;
  };

  const confirmDelete = useConfirm(
    "저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?",
    deleteWord,
    abortWord
  );

  const onSaveBtnClick = () => {
    const formData = new FormData();
    formData.append("categoryName", selectedCategory);

    axios({
      baseURL: "http://localhost:8080",
      url: "/upload",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <S.CategoryListWrapper>
      <S.CategoryListDetail
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="">카테고리를 선택해주세요.</option>
        <option value="cooking">요리</option>
        <option value="workout">운동</option>
        <option value="programming">프로그래밍</option>
      </S.CategoryListDetail>

      <Button
        setIsActive={setIsActive}
        confirmDelete={confirmDelete}
        isActive={isActive}
        onSaveBtnClick={onSaveBtnClick}
        notify={notify}
      />
    </S.CategoryListWrapper>
  );
}

export default CategoryList;
