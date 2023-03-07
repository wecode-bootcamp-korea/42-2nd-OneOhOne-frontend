import styled from "styled-components";
import { Link } from "react-router-dom";

export const IndividualItem = styled.div`
  display: flex;
`;
export const LectureWrapper = styled(Link)`
  width: 250px;
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;
export const CheckIcon = styled.img`
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const LectureItem = styled(Link)`
  text-decoration: none;
  letter-spacing: 0.5px;
  color: gray;
  max-width: 45%;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;
export const LengthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: 5px;
`;
export const LectureLength = styled.h5`
  font-size: 15px;
`;
export const LengthIcon = styled.img`
  width: 15px;
`;
