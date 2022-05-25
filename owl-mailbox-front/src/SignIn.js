import React from "react";
import styled from "styled-components";
import { logos, login } from "./Icons/Resources";

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

const LoginWrapper = styled.div`
    text-align: center
`;
const KakaoLogin = styled.img`
    margin-top: 100px;
`;
const SignIn = () => {
    return (
        <Container>
            <LogoDiv>
                <LogoImg src = {logos.main_logo}/>
                <p>로그인</p>
            </LogoDiv>
            <LoginWrapper>
                <KakaoLogin src= {login.kakao_login_btn}/> 
            </LoginWrapper>
        </Container>
        
    )
  };
  export default SignIn;
  