import React, { useEffect } from "react";
import NicknameData from "./NicknameData.json";


function NicknameRandom(){
    const nickname = async() => {
        try{
            await fetch('http://ec2-52-79-45-176.ap-northeast-2.compute.amazonaws.com:3001/signup/v1/randomname', {
                method: 'GET',
                headers: { 'Content-Type' : 'application/json', },
                body: CreateNicknameRandom(),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        } catch(err){
            console.log("error");
        }
    };


    useEffect(() => {
        NicknameRandom(nickname);
    });

    return <></>;
    }

    function CreateNicknameRandom(){
        return(console.log(<div>
            {NicknameData.determiners[
                    Math.floor(Math.random() * NicknameData.determiners.length
                )] + 
                NicknameData.birds[
                    Math.floor(Math.random() * NicknameData.birds.length
                )]
            }
        </div>
        ));
    }

export default NicknameRandom;