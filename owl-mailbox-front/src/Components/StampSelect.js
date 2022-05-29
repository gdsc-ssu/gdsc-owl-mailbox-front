// 우표 선택 화면
import React from "react";
import styled from "styled-components";
import Stamp from "../Icons/stamp_example.png";

// 화면 전체 div flexbox
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

// 우표 카테고리 설명
const Explain = styled.div`
    margin-top: 20px;
    font-size: 12px;
`;

// 카테고리별 우표 박스
const StampContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 350px;
    height: 130px;
    padding-left: 20px;

    justify-content: center;
    align-content: center;
    overflow: scroll;
    background-color: #F6F6F6;
    border-radius: 13px;

    &::-webkit-scrollbar {
        width: 0px;
        height: 7px;
        border-radius: 6px;
        background-color: #F6F6F6;
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

// 우표 이미지
const StampImg = styled.img`
    width: 100px;
    height: 110px;
`;

// 선택하기 버튼
const Button = styled.button`
    margin-top: 30px;

    width: 200px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #828ED1;
    background: none;

    font-weight: bold;
    font-size: 15px;
    color: #828ED1;

`;

const StampSelect = () => {
    return (
      <>
        <Container>
            <Explain>우표.. 그런데 이제 계절을 곁들인</Explain>
            <StampContainer>
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
            </StampContainer>

            <Explain>우표.. 그런데 이제 기분을 곁들인</Explain>
            <StampContainer>
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
            </StampContainer>

            <Explain>우표.. 그런데 이제 특별함을 곁들인</Explain>
            <StampContainer>
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
                <StampImg src={Stamp} alt="stamp-img" />
            </StampContainer>

            <Button onClick={""}>선택하기</Button>
        </Container>
      </>
    );
  };
  export default StampSelect;