import React from "react";
import styled from "styled-components";

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

const LetterView = () => {
    const handleLetterClick = () =>{
        window.location.href = "/viewpage/letter";
    };

    return (
        <Container>
            <LetterElement  onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이_13</LetterTitle>
                    <LetterDate>2022.07.07</LetterDate>
                </LetterInfo>
                <LetterContent>GDSC Soongsil is a community group for Soongsil University students interested in programming and...</LetterContent>

            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>햇살까마귀_516</LetterTitle>
                    <LetterDate>2022.07.02</LetterDate>
                </LetterInfo>
                <LetterContent>죽음의 공평한 발걸음은 가난한 자의 오막집과 임금의 궁궐을 모두 찾아가 문을 두드린다.</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>밤샘하는닭_54</LetterTitle>
                    <LetterDate>2022.06.18</LetterDate>
                </LetterInfo>
                <LetterContent>삶의 완전한 의미를 이해하는 것은 배우의 의무, 해석하는 것은 배우 문제, 표현하는 것은 배우의 노력한...</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>일어난잉꼬_645</LetterTitle>
                    <LetterDate>2022.06.11</LetterDate>
                </LetterInfo>
                <LetterContent>네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네...</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>집가는두루미_859</LetterTitle>
                    <LetterDate>2022.06.02</LetterDate>
                </LetterInfo>
                <LetterContent>책이 천장에, 하늘에 닿는다. 내가 쌓은 책은 높이가 1마일은 된다. 내가 얼마나 이 책들을 사랑하는지! 내게 ...</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>일어나는소_818</LetterTitle>
                    <LetterDate>2022.05.02</LetterDate>
                </LetterInfo>
                <LetterContent>내가 좋아하거나 존경하는 사람들의 공통분모는 찾을 수 없지만, 내가 사랑하는 사람들의 공통된 특징은 찾을 ...</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>좋은닭_348</LetterTitle>
                    <LetterDate>2022.04.30</LetterDate>
                </LetterInfo>
                <LetterContent>인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>치킨먹는제비_483</LetterTitle>
                    <LetterDate>2022.04.15</LetterDate>
                </LetterInfo>
                <LetterContent>일정 연령이 지나면 독서는 창의적인 추구로부터 마음을 너무 멀어지게 만든다. 너무 많이 읽고 자신의 뇌를 너...</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>멋진닭_272</LetterTitle>
                    <LetterDate>2022.03.26</LetterDate>
                </LetterInfo>
                <LetterContent>긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다.</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>예상못한닭_945</LetterTitle>
                    <LetterDate>2022.03.07</LetterDate>
                </LetterInfo>
                <LetterContent>욕구란 성취에 대한 생각이 동반될 때 희망이라 불린다. 같은 욕구에 이러한 생각이 없다면 이는 절망이다.</LetterContent>
            </LetterElement>

            <LetterElement onClick = {handleLetterClick}>
                <LetterInfo>
                    <LetterTitle>햇살까치_761</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>못 가진 것에 대한 욕망으로 가진 것을 망치지 말라. 하지만 지금 가진 것이 한때는 바라기만 했던 것 중 하나였...</LetterContent>
            </LetterElement>
        </Container>
        
    )
};
export default LetterView;
