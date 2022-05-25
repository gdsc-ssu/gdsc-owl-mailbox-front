import React from "react";
import styled from "styled-components";
import { logos } from "../../Icons/Resources";
import { useState } from "react";

const Container = styled.div`
    width: 100%;    
`;

const LogoImg = styled.img`
    width: 20%;
    margin: 0px auto;
`;

const LogoDiv = styled.div`
    text-align: center;
    margin-top: 150px;
    font-size: 23px;
    font-weight: bold;
    color: #5a7cd3;
`;

const InputBox = styled.input`
  width: 30%;
  margin: 35px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1.5px solid #5a7cd3;
  padding: 0px 0px 10px 10px;
  font-size: 13px;
  border-radius: 0;
  flex: 1;
  float: left;

  @media (max-width: 430px) {
    width: 50%;
  }
`;

const DuplicateBtn = styled.div`
    text-align: center;
    font-size: 1px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    border-radius: 4px;
    height: 20px;
    background-color: #828ed1;
    flex: 0.3;
    padding-top: 6px;
    margin-top: 35px;
    margin-right: 50px;
    
`;

const CheckBox = styled.input`
  padding: 20px;
  position: absolute;
  color: white;
  font-size: 15px;
  left: 50px;
  zoom: 1.2;
  ::placeholder {
    color: black;
  }
`;


const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Box1 = styled.div`
  display: flex;
//   flex-direction: column;
  margin-top: 30px;
`;

const Text = styled.div`
  flex: 1;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
  margin-top: 2px;

`;

const Wrap = styled.div`
    flex: 1; 
    width: 330px;
    margin-left: 150px;
    margin-top: 2px;
`;

const InputBoxWrapper = styled.div`
    display: flex;    
    font-size: 13px;
    color: #5a7cd3;
`;


const Btn = styled.button`
  padding: 3px 20px;
  width: 75%;
  margin: 20px 0px 0px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  border: none;
  background-color: #d2d2d2;
  &;hover {
    background-color: black;
  }
`;

const SignUp = () => {
    return (
        <Container>
            <LogoDiv>
                <LogoImg src = {logos.main_logo}/>
                <p>회원 가입</p>
            </LogoDiv>
            <Box1>
                <InputBox placeholder="닉네임을 입력하세요"/>
                <DuplicateBtn>중복확인</DuplicateBtn>
            </Box1>
            <Box>
            <InputBoxWrapper>
                <CheckBox id="didAgree" type="checkbox" />
                <Wrap>[필수] 사용자 이용약관 동의하기</Wrap>
                <Text>보기</Text>
            </InputBoxWrapper>
            <Btn>가입하기</Btn>
            </Box>
        </Container>
        
    )
  };
  export default SignUp;
  