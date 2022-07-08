import React from "react";
import styled from "styled-components";
import { mypage_icons } from "../../Icons/Resources";
import { Link } from 'react-router-dom';

const NameTextWrapper = styled.div`
    margin: 50px;
    margin-top: 100px;
    font-size: 19px;
`;
const NameText = styled.div`
    font-weight: bold;
    color: #828ed1;
    font-size: 30px;
`;

const Text = styled.div`
    color: #828ed1;
    font-size: 30px;
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
            <NameText>익명의 부엉이_13 님,</NameText>
            <Text>안녕하세요.</Text>
        </NameTextWrapper>
        <MyPageImgWrapper>
                <Link to="/mypage/sentmailbox"><MyPageImg src={mypage_icons.sent_mail}/></Link>
                <Link to="/mypage/tempmailbox"><MyPageImg src={mypage_icons.temporary_storage}/></Link>
                <Link to="/mypage/editname"><MyPageImg src={mypage_icons.edit_name}/></Link>
                <Link to="/setting"><MyPageImg src={mypage_icons.setting}/></Link>
            </MyPageImgWrapper>
            <p style={{textAlign: "center", fontSize: "5px", marginTop: "20px", color: "f2f2f2"}}>Copyright owl-mailbox in GDSC, AllRights Reserved.</p>
        </>
    )
  };
  export default MyPageMain;
  