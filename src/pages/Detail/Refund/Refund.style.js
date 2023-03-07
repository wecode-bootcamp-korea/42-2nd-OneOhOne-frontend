import styled from "styled-components";

export const RefundContainer = styled.div`
  padding-top: 100px;
  margin-left: 30px;
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 20px;
`;
export const RefundBox = styled.div`
  margin-bottom: 120px;
  padding: 25px;
  width: 90%;
  height: 100px;
  background-color: rgb(248, 248, 248);
`;
export const RefundInfo = styled.h5`
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: gray;
`;
export const Highlight = styled.h6`
  color: rgb(253, 107, 28);
  font-weight: 700;
`;
export const RefundBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
