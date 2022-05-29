/* 신고 접수 확인 팝업 */

import React from "react";
import styled from "styled-components";
import Check from "../../Icons/check-icon.png";

/* 팝업창 박스 */
const Container = styled.div`
    width: 270px;
    height: 130px;
    background-color: rgba(218, 221, 252, 0.8);
    border-radius: 14px;
    padding-top: 10px; 

    align-items: center;
    text-align: center;
`;

/* 신고 접수 확인 아이콘 */
const CheckIcon = styled.img`
    width: 40px;
    margin: 0 auto;
    filter: drop-shadow(2px 2px 2px #828ED1)
`;

/* 팝업 - 신고 접수 확인 설명 */
const Explain = styled.div`
    font-weight: normal;
    margin-top: 7px;
    font-size: 13px;
`;

/* 허용 버튼 상단 선 */
const StyledLine = styled.hr`
    margin-top: 20px;
    margin-bottom: 7px;
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


const ReportConfirmPopup = () => {
    return (
      <>
        <Container>
            <Explain>
                <CheckIcon src={Check} alt="check-icon"/>
                <br />
                신고 내용이 접수되었습니다.
            </Explain>
            <StyledLine />
            <Button onClick="#">확인</Button>
        </Container>
      </>
    );
  };
export default ReportConfirmPopup;