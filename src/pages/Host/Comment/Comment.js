import React from "react";
import * as S from "./Comment.style";

function Comment() {
  return (
    <S.CommentContainer>
      <S.CommentTitle>코멘트</S.CommentTitle>
      <S.CommentInputBox>
        <S.CommentInputUser>
          <S.UserProfileImg
            src="https://cdn-icons-png.flaticon.com/128/201/201634.png"
            alt="유저 프로필 이미지"
          />
          <S.CommentInput>댓글을 입력해주세요.</S.CommentInput>
        </S.CommentInputUser>

        <S.CommentUploadBtn
          src="https://cdn-icons-png.flaticon.com/128/9135/9135941.png"
          alt="댓글 업로드 버튼"
        />
      </S.CommentInputBox>
    </S.CommentContainer>
  );
}

export default Comment;
