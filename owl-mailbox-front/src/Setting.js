import React from "react";
import styled from "styled-components";
import { arrows } from "./Icons/Resources";

const Container = styled.div`
    width: 100%;
`;

const NavBot = styled.div`
    height: 20px;
    padding: 18px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-weight: bold;
    font-size: 20px;
    color: #5a7cd3;
`;

const Container2 = styled.div`
  padding-bottom: 0px;
  margin-top: 3px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  color: #828ed1;
  font-weight: bold;
  padding: 18px 30px;
  cursor: pointer;
  border: solid #d2d2d2;
  border-width: 0px 0px 1px 0px;
  background-color: #f6f6f6;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  padding: 15px 10px;
  line-height: 1.13;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  border: solid #dcdcdc;
  border-width: 0px 0px 1px 0px;
  @media (max-width: 430px) {
    font-size: 17px;
    padding: 15px 30px;
  }
  
`;

const Setting = () => {
  return (
    <>
    <Container>
            <NavBot style={{ textAlign: "center"}}>                 
            <img
                    src={arrows.left_arrow}
                    alt="왼쪽 화살표"
                    style={{ width: "18px", float: "left", marginTop: "4px"}}
                  ></img>마이 페이지</NavBot>
      <Container2>
        <Title>부엉이 우편함</Title>
        <Text>부엉이 우편함 탄생일기</Text>
        <Text>개인정보 처리 방침</Text>
        <Text>운영방침</Text>
      </Container2>
      <Container2>
        <Title>계정관리</Title>
        <Text>로그아웃</Text>
        <Text>회원 탈퇴</Text>
      </Container2>
      <Container2>
        <Title>건의 및 신고</Title>
        <Text>건의하기</Text>
        <Text>신고하기</Text>
      </Container2>
      <p style={{textAlign: "center", fontSize: "5px", marginTop: "20px", color: "f2f2f2"}}>Copyright owl-mailbox in GDSC, AllRights Reserved.</p>
      </Container>
    </>
  );
};
export default Setting;