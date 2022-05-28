import React from "react";
import styled from "styled-components";

const NameTextWrapper = styled.div`
    margin: 50px;
    margin-top: 100px;
    font-size: 19px;
`;
const NameText = styled.div`
    font-weight: bold;
    color: #828ed1;
`;

const Text = styled.div`
    color: #828ed1;
`;

const CheckBox = styled.input`
  padding: 20px;
  position: absolute;
  color: white;
  font-size: 15px;
  left: 40px;
  zoom: 1.2;
  border: solid 1px #828ed1;
  ::placeholder {
    color: #828ed1;
  }
`;

const CheckBoxText = styled.div`
  margin-left: 75px;
  margin-top: 53px;
  font-size: 13px;
  color: #828ed1;
`;

const ConfirmBtnWrapper = styled.div`
    text-align: center;
`;

const ConfirmBtn = styled.button`
    border-radius: 10px;
    width: 35%;
    margin: 5px;
    margin-top: 20px;
    line-height: 3;
    border: none;    
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: #d2d2d2;
`;

const DeleteAccount = () => {
    return (
        <>
        <NameTextWrapper>
            <NameText>보내는사람닉네임글자 님,</NameText>
            <Text>정말 탈퇴하시는 건가요?</Text>
        </NameTextWrapper>
        <NameTextWrapper style={{fontSize: "15px", marginTop: "60px"}}>
        <NameText>계정을 삭제하면...</NameText>
        <Text>
- 모든 게시글 및 활동 내역이 삭제됩니다. <br/>
- 계정을 다시 살리거나, 게시글 및 활동 내역 데이터를 복구할 수 없습니다.<br/>
- 현재 계정으로 로그인이 불가합니다.</Text>
        </NameTextWrapper>
    <CheckBox id="didAgree" type="checkbox" />
    <CheckBoxText>위의 내용을 확인하였습니다.</CheckBoxText>
    <ConfirmBtnWrapper>
        <ConfirmBtn>취소</ConfirmBtn>
        <ConfirmBtn style={{backgroundColor: "#828ed1"}}>제출</ConfirmBtn>
    </ConfirmBtnWrapper>
            </>
    )
  };
  export default DeleteAccount;
  