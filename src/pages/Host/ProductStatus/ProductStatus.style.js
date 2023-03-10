import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c9c9c9;
  margin-top: 40px;
  padding: 40px 30px;
  border-radius: 20px;
  height: 310px;
`;

export const StatusTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const CurrentStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 190px;
`;

export const CurrentStatusTitle = styled.div`
  color: #606061;
`;

export const ProductStatus = styled.div`
  font-weight: bold;
`;

export const SubmitGuide = styled.span`
  line-height: 25px;
`;

export const ReviewBtn = styled.button`
  border-radius: 3px;
  border: transparent;
  background-color: #dedede;
  color: #8b8b8b;
  font-size: 17px;
  font-weight: bold;
  padding: 13px 0px;
`;
