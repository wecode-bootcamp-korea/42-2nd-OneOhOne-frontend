import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
export const StickyBox = styled.div`
  border-radius: 20px;
  margin-top: 20px;
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
  border: 1px solid lightgray;
  box-shadow: -1px 1px 5px 0px lightgray;
  border-top: none;
`;
export const Category = styled.div`
  font-size: 15px;
  display: flex;
`;
export const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  line-height: 30px;
  padding: 20px 0px;
`;
export const Status = styled.div`
  font-size: 13px;
  background-color: #f8f8f8;
  color: #fe5d01;
  font-weight: 600;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
`;
export const PriceBox = styled.div`
  padding: 30px 0px;
  font-size: 18px;
  display: flex;
`;
export const Price = styled.div`
  font-weight: 800;
`;
export const GradeBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-bottom: 20px;
  gap: 3px;
  border-bottom: 1px solid lightgray;
`;
export const Grade = styled.div`
  font-weight: 700;
`;
export const Icon = styled.img`
  width: 15px;
  margin-right: 5px;
`;
export const IconButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  margin: 0px 10px;
`;
export const IconButton = styled.button`
  width: 30%;
  white-space: nowrap;
  border: none;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const Subscribe = styled.button`
  margin: 0px 10px;
  width: 95%;
  border: none;
  height: 50px;
  background-color: #fe5d01;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const Banner = styled.div`
  padding: 15px;
  border: 1px solid gray;
  background-color: black;
  margin: 20px 0px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  font-size: 14px;
  width: 65%;
`;
export const Ad = styled.h3`
  color: white;
  font-weight: 500;
`;
export const AdInfo = styled.h6`
  color: lightgray;
  font-size: 11px;
`;
export const Logo = styled.div`
  width: 35%;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
