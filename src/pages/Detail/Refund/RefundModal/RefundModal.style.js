import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
export const ModalContainer = styled.div`
  border-radius: 20px;
  position: fixed;
  top: 50%;
  background-color: white;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  width: 500px;
  padding-bottom: 120px;
`;
export const ExitBox = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
`;
export const RefundTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
  margin: 20px 0px 20px 40px;
`;
export const ExitBtn = styled.button`
  border: none;
  margin-right: 10px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;
export const RefundInfoContainer = styled.div`
  margin: 0px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  height: 100%;
`;
