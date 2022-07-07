import React from 'react';

// KakaoLoginData
//console.log(process.env.REACT_APP_REST_API_KEY);
export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI = 'http://localhost:3000/signup/join';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
