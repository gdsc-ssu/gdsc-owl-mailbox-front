// KakaoLoginData
export const REST_API_KEY = '5be57044aa5c89ff5729744fd2e85017';
export const REDIRECT_URI = 'http://localhost:3000/login/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
