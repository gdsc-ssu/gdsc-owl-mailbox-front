import React, { useEffect } from "react";
import { REST_API_KEY, REDIRECT_URI } from "./LoginData";
import { useLocation, useNavigate  } from "react-router";
import QueryString from "qs";
import NicknameRandom from "./NicknameRandom";


function LoginCallback(){
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    /* 카카오에서 회원 토큰 발급 */
    const getKakaoToken = async() => {
        try{
            await fetch(`https:kauth.kakao.com/oauth/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
                body: QueryString.stringify({
                    'grant_type': 'authorization_code',
                    'client_id': REST_API_KEY,
                    'redirect_uri': REDIRECT_URI,
                    'code': KAKAO_CODE,
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.access_token){
                    console.log("Success:", data);
                    localStorage.setItem('accessToken', data.access_token);
                    
                } else if(data.refresh_token){
                    console.log("Success:", data);
                    
                }
            });
            navigate("/");
        } catch(err){
            console.log("error");
        }
    }

    /* 서버로 회원 토큰 전송 (회원가입) */
    const sendSignupToken = async() => {
        try{
            await fetch('http://ec2-52-79-45-176.ap-northeast-2.compute.amazonaws.com:3001/signup/v1/kakao', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json', },
                body: JSON.parse({
                    'accessToken': getKakaoToken.data.access_token,
                    'nickname': NicknameRandom(),
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(navigate('/'));
        } catch(err){
            console.log("error");
        }
    };

    /* 서버로 회원 토큰 전송 (로그인) */
    const sendLoginToken = async() => {
        try{
            await fetch('http://ec2-52-79-45-176.ap-northeast-2.compute.amazonaws.com:3001/auth/v1/kakao/login', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json', },
                body: JSON.parse({
                    'accessToken': getKakaoToken.data.access_token,
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(navigate('/'));
        } catch(err){
            console.log("error");
        }
    };

    /* 서버로 리퀘스트 토큰 전송 (로그인) */
    const sendrefreshToken = async() => {
        try{
            await fetch('http://ec2-52-79-45-176.ap-northeast-2.compute.amazonaws.com:3001/auth/refresh', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json', },
                body: JSON.parse({
                    'refreshToken': getKakaoToken.data.refresh_token,
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(navigate('/'));
        } catch(err){
            console.log("error");
        }
    };    

    useEffect(() => {
        LoginCallback(getKakaoToken);
        LoginCallback(sendSignupToken);
        LoginCallback(sendLoginToken);
    });

    return <></>;
}

export default LoginCallback;