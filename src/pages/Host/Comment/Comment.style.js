import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c9c9c9;
  margin-top: 40px;
  padding: 40px 30px;
  border-radius: 20px;
  height: 175px;
`;

export const CommentTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const CommentInputBox = styled.div`
  background-color: #f0f0f0;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
`;

export const CommentInputUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 193px;
`;

export const UserProfileImg = styled.img`
  width: 35px;
`;

export const CommentInput = styled.div`
  color: gray;
  margin-top: 9px;
  font-size: 17px;
`;

export const CommentUploadBtn = styled.img`
  width: 35px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  filter: grayscale(100%);
`;
