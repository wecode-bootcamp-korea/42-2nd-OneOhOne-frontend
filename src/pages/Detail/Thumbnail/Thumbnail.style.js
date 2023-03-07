import styled from "styled-components/macro";

export const ThumbnailLayout = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
`;
export const HighlightLayout = styled.div`
  width: 60%;
  height: 100%;
`;
export const HighlightThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AdditionalLayout = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
`;
export const AdditionalThumbnail = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;
export const ThumbnailButton = styled.button`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 50%;
  padding: 0;
  border: none;
  background-color: rgb(73, 73, 73, 0.4);
  color: white;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    opacity: 70%;
  }
`;
