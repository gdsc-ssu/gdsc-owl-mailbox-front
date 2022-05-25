import React from "react";
import styled from "styled-components";
import { mypage_icons } from "../../Icons/Resources";

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

const MyPageImgWrapper = styled.div`
    text-align: center;
`;


const MyPageImg = styled.img`
    width: 35%;
    margin: 8px;
`;
const MyPageMain = () => {
    return (
        <>
        <NameTextWrapper>
            <NameText>보내는사람닉네임글자 님,</NameText>
            <Text>안녕하세요.</Text>
        </NameTextWrapper>
        <MyPageImgWrapper>
                <MyPageImg src={mypage_icons.sent_mail}/>
                <MyPageImg src={mypage_icons.temporary_storage}/>
                <MyPageImg src={mypage_icons.edit_name}/>
                <MyPageImg src={mypage_icons.setting}/>
            </MyPageImgWrapper>
            <p style={{textAlign: "center", fontSize: "5px", marginTop: "20px", color: "f2f2f2"}}>Copyright owl-mailbox in GDSC, AllRights Reserved.</p>
        </>
    )
  };
  export default MyPageMain;
  