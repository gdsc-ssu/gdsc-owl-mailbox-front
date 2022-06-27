import React, { useEffect, useState, useCallback } from "react";
import { REST_API_KEY, REDIRECT_URI } from "./LoginData";
import { useLocation, useNavigate  } from "react-router";
import QueryString from "qs";
import NicknameRandom from "./NicknameRandom";


const LoginCallback = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    /* 카카오에서 회원 토큰 발급 */
    const getKakaoToken = async() => {
        try{
            fetch(`https:kauth.kakao.com/oauth/token`, {
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
                    localStorage.setItem('refreshToken', data.refresh_token);
                }
            });
            navigate("/");
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if(!location.search) return;
        getKakaoToken();
    }, []);
}

export default LoginCallback;