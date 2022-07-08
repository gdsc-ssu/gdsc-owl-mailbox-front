import React from "react";
import styled from "styled-components";
import { stamps } from "../../Icons/Resources";
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    overflow: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        border-radius: 6px;
        background-color: none;
    }

    &::-webkit-scrollbar-thumb {
        background: #828ED1;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-corner {
        background-color: #F6F6F6;
        border-bottom-right-radius: 10px;
    }
`;

const LetterElement = styled.div`
    width: 85%;
    height: 100px;
    border: 1px solid #828ed1;
    background-color: #F6F6F6;
    border-radius: 20px;
    margin: 10px;

    display: flex;
    flex-direction: column;
`;

const LetterInfo = styled.div``;

const LetterTitle = styled.div`
    font-size: 15px;
    color: #828ed1;
    font-weight: 600;
    padding: 8px 15px;
    float: left;
`;

const LetterDate = styled.div`
    float: right;
    padding: 10px 15px;
    font-size: 12px;
    color: #828ed1;
    font-weight: 500;
    margin-top: 3px;
`;

const LetterContent = styled.div`
    padding: 0 10px;
    margin-left: 5px;
    font-size: 15px;
    color: #828ed1;
`;

const ListView = () => {
    const handleLetterClick = () =>{
        window.location.href = "/viewpage/letter";
    };

    return (
        <Container>
            <LetterElement  onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이_13</LetterTitle>
                    <LetterDate>2022.06.30</LetterDate>
                </LetterInfo>
                <LetterContent>무슨말을 적지요..? 지디에스씨 숭실... 부엉이우편함 화이팅</LetterContent>
            </LetterElement>

        </Container>
        
    )
};
export default ListView;
