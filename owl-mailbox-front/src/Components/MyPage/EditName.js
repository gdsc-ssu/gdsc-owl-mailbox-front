import React from "react";
import styled from "styled-components";
import { owl_logos } from "../../Icons/Resources";

const Container = styled.div`
    width: 100%;    
`;

const LogoImg = styled.img`
    width: 20%;
    margin: 0px auto;
`;

const LogoDiv = styled.div`
    text-align: center;
    margin-top: 100px;
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

const EditName = () => {
    return (
        <Container>
            <LogoDiv>
                <LogoImg src = {owl_logos.owl_close}/>
                <p>닉네임 수정</p>
            </LogoDiv>
            <Box1>
                <InputBox placeholder="닉네임을 입력하세요"/>
                <DuplicateBtn>중복확인</DuplicateBtn>
            </Box1>
            <Box>
            <Btn>변경하기</Btn>
            </Box>
        </Container>
        
    )
  };
  export default EditName;
  