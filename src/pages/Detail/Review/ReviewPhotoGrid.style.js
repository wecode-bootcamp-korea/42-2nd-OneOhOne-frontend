import styled from "styled-components";

export const PhotoGrid = styled.div`
  display: grid;
  width: 50%;
  gap: 5px;
  margin-right: 50px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;
export const PhotoBox = styled.img`
  border: 1px solid lightgray;
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    opacity: 80%;
  }
`;
