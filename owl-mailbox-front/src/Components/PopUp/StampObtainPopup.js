/* 편지 전송 후 우표 획득 팝업 */

import React from "react";
import styled from "styled-components";
import Stamp from "../../Icons/stamp_example.png";

/* 팝업창 박스 */
const Container = styled.div`
    position: absolute;
    left: 40%;
    top: 0%;

    width: 250px;
    height: 230px;
    background-color: rgba(218, 221, 252, 0.8);
    border-radius: 14px;
    padding-top: 10px; 

    align-items: center;
    text-align: center;
`;

/* 우표 이미지 - example */
const StampImg = styled.img`
    width: 80px;
    margin: 0 auto;
`;

/* 팝업 - 부엉이 우편함 타이틀 */
const Title = styled.div`
    font-weight: bolder;
    font-size: 17px;
`;

/* 팝업 - 부엉이 우편함 우표 획득 기준 설명 */
const Explain = styled.div`
    font-weight: normal;
    margin-top: 7px;
    font-size: 12px;
`;

/* 허용 버튼 상단 선 */
const StyledLine = styled.hr`
    margin-top: 15px;
    margin-bottom: 5px;
    border-top: 1px solid rgba(60, 60, 67, 0.29);
`;

/* 확인 버튼 */
const Button = styled.button`
    font-size: 17px;
    font-weight: bold;
    color: #007AFF;
    background-color: transparent !important;
    outline: none;
    border: none;
`;

const StampObtainPopup = () => {
    return (
      <>
        <Container>
            <Title>우표를 획득하였습니다!</Title>
            <Explain>
                <StampImg src={Stamp} alt="stamp-img"/>
                <br />
                우표는 최대 5장까지 획득하실 수 있습니다. <br />
                우표 획득 및 사용 기준 : <br />
                편지 열람 시 1개의 우표 획득 <br />
                편지 작성 시 1개의 우표 사용
            </Explain>
            <StyledLine />
            <Button onClick="#">확인</Button>
        </Container>
      </>
    );
  };
export default StampObtainPopup;