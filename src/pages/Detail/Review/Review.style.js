import styled from "styled-components";

export const DetailContainer = styled.div`
  padding-top: 50px;
`;
export const Title = styled.h1`
  margin-left: 30px;
  font-size: 25px;
  font-weight: 700;
  width: 180px;
  line-height: 35px;
  margin-bottom: 20px;
`;
export const Subtitle = styled(Title)`
  font-size: 20px;
`;
export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Reviews = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
`;
export const ReviewHeading = styled.h6`
  font-size: 12px;
  font-weight: 600;
  color: gray;
`;
export const ReviewNumber = styled.h6`
  font-size: 35px;
  font-weight: 900;
`;
export const RealReview = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
`;
export const StarBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Star = styled.img`
  width: 25px;
`;
export const Grade = styled.h2`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  gap: 10px;
`;
export const GradeNumber = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;
