import React, { useEffect } from "react";
import { REST_API_KEY, REDIRECT_URI } from "./LoginData";
import { useLocation, useNavigate  } from "react-router";

function LoginCallback(){

    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    const KakaoToken = () =>{
        fetch(`https:kauth.kakao.com/oauth/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token){
                localStorage.setItem('token', data.access_token); //localStorage에 token값 저장ok 서버롭 보내는 거,,하기,,
                navigate("/");
            } else{
                navigate('/login');
            }
        });
    };


    useEffect(() => {
        if(!location.search) return;
        KakaoToken();
    }, []);

    return <></>;
}

export default LoginCallback;