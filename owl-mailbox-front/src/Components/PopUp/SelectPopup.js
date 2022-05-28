import React from "react";
import styled from "styled-components";

/* 팝업창 박스 */
const Container = styled.div`
    position: absolute;
    left: 40%;
    top: 0%;

    width: 270px;
    height: 130px;
    background-color: rgba(218, 221, 252, 0.8);
    border-radius: 14px;
    padding-top: 19px; 

    align-items: center;
    text-align: center;
`;

/* 팝업 - 부엉이 우편함 타이틀 */
const Title = styled.div`
    font-weight: bolder;
    font-size: 17px;
`;

/* 팝업 - 부엉이 우편함 gps 설명 */
const Explain = styled.div`
    font-weight: normal;
    margin-top: 7px;
    font-size: 13px;
`;

/* 허용 버튼 상단 선 */
const StyledLine = styled.hr`
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px solid rgba(60, 60, 67, 0.29);
`;

/* 버튼 플렉스 박스 */
const BtnBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.button`
    flex-grow: 1;
    flex-basis: 90px;
    font-size: 17px;
    font-weight: bold;
    color: #007AFF;
    background-color: transparent !important;
    outline: none;
    border: none;
`;

const SeparateLine = styled.div`
    height: 44px;
    border-left: 1px solid rgba(60, 60, 67, 0.29);
`;

const ConfirmPopup = () => {
    return (
      <>
        <Container>
        <Title>부엉이 우편함</Title>
        <Explain>
            임시저장을 하지 않고 뒤로가기를 <br /> 선택할 경우 내용이 저장되지 않습니다.
        </Explain>
        <StyledLine />
        <BtnBox>
            <Button onClick="#">뒤로가기</Button>
            <SeparateLine />
            <Button onClick="#">계속 작성하기</Button>
        </BtnBox>
    </Container>
      </>
    );
  };
  export default ConfirmPopup;