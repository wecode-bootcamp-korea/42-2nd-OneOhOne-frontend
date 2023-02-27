import styled from "styled-components";

export const MenuLayout = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 50px;
  color: gray;
  background-color: white;
`;

export const Categories = styled.div`
  font-size: 15px;
  display: flex;
  gap: 20px;
  top: 300px;
  &:hover {
    cursor: pointer;
  }
`;
