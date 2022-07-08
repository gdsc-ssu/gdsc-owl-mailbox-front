// 우표 선택 화면
import React from "react";
import styled from "styled-components";
import Stamp from "../../Icons/stamp_example.png";
import {Link} from "react-router-dom";

// 계절 우표
import Spring from "../../Icons/letter-stamps/02-spring.png";
import Summer from "../../Icons/letter-stamps/02-summer.png";
import Fall from "../../Icons/letter-stamps/02-fall.png";
import Winter from "../../Icons/letter-stamps/02-winter.png";
// 기분 우표
import Flex from "../../Icons/letter-stamps/01-flex.png";
import Happy from "../../Icons/letter-stamps/01-happy.png";
import Lucky from "../../Icons/letter-stamps/01-lucky.png";
import Sad from "../../Icons/letter-stamps/01-sad.png";
// 스페셜 우표
import FirstLetter from "../../Icons/letter-stamps/03-firstletter.png";
import GDSC from "../../Icons/letter-stamps/03-gdsc.png";
import SSU from "../../Icons/letter-stamps/03-ssu.png";

// 화면 전체 div flexbox
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

// 우표 카테고리 설명
const Explain = styled.div`
    margin: 20px 0 5px 20px;
    font-size: 13px;
`;

// 카테고리별 우표 박스
const StampContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    width: 400px;
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
    width: 120px;
    // height: 110px;
    margin: 10px 10px;
    border-radius: 10px;

    &:hover {
        box-shadow: 3px 3px 5px gray;
    }
`;

// 선택하기 버튼
const Button = styled.button`
    margin: 30px auto 0 130px;

    width: 200px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #828ED1;
    background: none;

    font-weight: bold;
    font-size: 15px;
    color: #828ED1;

    &:hover {
        background-color: #828ed1;
        color: white;
    }

`;

const StampSelect = () => {
    return (
        <>
        <Container>
            <Explain>계절에 따라 우표를 붙여보세요.</Explain>
            <StampContainer>
                <StampImg src={Spring} alt="stamp-img" />
                <StampImg src={Summer} alt="stamp-img" />
                <StampImg src={Fall} alt="stamp-img" />
                <StampImg src={Winter} alt="stamp-img" />
            </StampContainer>

            <Explain>기분에 따라 우표를 붙여보세요.</Explain>
            <StampContainer>
                <StampImg src={Flex} alt="stamp-img" />
                <StampImg src={Happy} alt="stamp-img" />
                <StampImg src={Lucky} alt="stamp-img" />
                <StampImg src={Sad} alt="stamp-img" />
            </StampContainer>

            <Explain>특별한 우표를 당신에게 선물합니다.</Explain>
            <StampContainer>
                <StampImg src={FirstLetter} alt="stamp-img" style={{ "width":"90px"}} />
                <StampImg src={GDSC} alt="stamp-img" style={{ "width":"90px"}} />
                <StampImg src={SSU} alt="stamp-img" style={{ "width":"90px"}} />
            </StampContainer>

            <Link to="/create" style={{"textDecoration":"none"}}><Button>선택하기</Button></Link>
        </Container>
      </>
    );
  };
  export default StampSelect;