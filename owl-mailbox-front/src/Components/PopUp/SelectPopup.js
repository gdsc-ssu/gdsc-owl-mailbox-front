import React from "react";
import styled from "styled-components";

/* 팝업창 박스 */
const Container = styled.div`
  position: absolute;
  left: 40%;
  top: 20%;

  width: 270px;
  height: 110px;
  background-color: rgba(218, 221, 252, 0.8);
  border-radius: 14px;
  padding-top: 10px; 

  align-items: center;
  text-align: center;
`;

/* 팝업 - 부엉이 우편함 타이틀 */
const Title = styled.div`
  font-weight: bolder;
  font-size: 17px;
`;

/* 팝업 - 닉네임 사용 가능 여부 설명란 */
const Explain = styled.div`
  font-weight: normal;
  margin-top: 7px;
  font-size: 13px;
`;

/* 허용 버튼 상단 선 */
const StyledLine = styled.hr`
  margin-top: 20px;
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

const SelectPopup = () => {
    return (
      <>
        <Container>
            <Title>부엉이 우편함</Title>
            <Explain>
                사용 불가능한 닉네임입니다.
            </Explain>
            <StyledLine />
            <Button onClick="">확인</Button>
        </Container>
      </>
    );
  };
  export default SelectPopup
;