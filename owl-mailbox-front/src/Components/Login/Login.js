import React from "react";
import styled from "styled-components";
import { owl_logos, login } from "../../Icons/Resources";
import { REST_API_KEY, REDIRECT_URI} from "../../Data/KakaoLoginData";

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
const Login = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const handleLogin = () =>{
        window.location.href = KAKAO_AUTH_URL;
    };

    const params = new URL(document.location).searchParams;
    const code = params.get("code");
    
    return (
        <Container>
            <LogoDiv>
                <LogoImg src = {owl_logos.owl_open}/>
                <p>로그인</p>
            </LogoDiv>
            <LoginWrapper>           
                <KakaoLogin src= {login.kakao_login_btn} onClick = {handleLogin} />
            </LoginWrapper>
        </Container>
        
    )
  };

  export default Login;
  