import styled from "styled-components";
import { flex } from "../../../styles/variables";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  ${flex}
  gap: 50px;
  height: 50px;
  background-color: white;
  overflow: hidden;
`;
export const LectureButton = styled(Link)`
  ${flex};
  text-decoration: none;
  height: 100%;
  width: 20%;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 20px;
  background-color: transparent;
  &:visited {
    color: black;
  }
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: lightgray;
  }
`;
