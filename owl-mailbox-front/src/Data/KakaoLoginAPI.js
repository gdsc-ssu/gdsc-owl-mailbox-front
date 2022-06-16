import axios from "axios";
import Login from "../Components/Login/Login";

const KakaoLoginAPI = async () =>{
    try{
        const result = await axios.get(
            `${process.env.BACK_LOCALHOST_URL}//api/v1/oauth2/authorization/kakao?code=${code}`
        );
    } catch(error){
        console.log("error", error);
    }
};