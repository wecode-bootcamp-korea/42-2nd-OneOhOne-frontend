import styled from "styled-components";

export const RefundSubtitle = styled.h3`
  font-weight: 700;
  font-size: 15px;
  margin-top: 30px;
`;
export const RefundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const GridTitle = styled.h4`
  background-color: rgb(248, 248, 248);
  border-bottom: 1px solid black;
  font-size: 13px;
  font-weight: 700;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridItemBox = styled.div`
  border: 1px solid rgb(248, 248, 248);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridItemLastBox = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridItem = styled.h6`
  margin: 15px 10px;
  font-size: 12px;
`;
export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const DetailItem = styled(GridItem)`
  margin: 0px;
  line-height: 15px;
`;
export const MoreDetailContainer = styled(DetailContainer)`
  margin-left: 10px;
`;
