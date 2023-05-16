import styled from "styled-components";

export const ChapterContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  width: 100%;
`;
export const ChapterBox = styled.div`
  padding: 10px 0px;
`;
export const ChapterInfo = styled.div`
  margin-left: 20px;
`;
export const ChapterName = styled.div`
  font-size: 22px;
  color: gray;
`;
export const VideoName = styled.h3`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  font-size: 15px;
  margin: 10px 0px;
  &:hover {
    cursor: pointer;
    color: black;
    transition: 0.3s;
  }
`;
export const VideoButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-size: 10px;
  margin-left: 10px;
`;
