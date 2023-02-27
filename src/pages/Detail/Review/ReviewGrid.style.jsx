import styled from "styled-components";

export const ReviewGrids = styled.div`
  margin: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;
export const GridBox = styled.div`
  display: grid;
  width: 170px;
  height: 170px;
  background-color: #f8f8f8;
  align-items: center;
  justify-items: center;
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    color: gray;
  }
`;
export const GridContents = styled.div`
  margin: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ReviewImg = styled.img`
  width: 13px;
  opacity: 50%;
`;
export const ReviewBody = styled.h2`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const ReviewWriter = styled.h6`
  font-size: 10px;
`;
