import React, {useState} from "react";
import styled from "styled-components";
import { stamps } from "../../Icons/Resources";
import { Link } from "react-router-dom";

// 전체 container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    padding: 30px;

`;

// 편지 작성부 container
const TextContainer = styled.div`
  width: 100%;
`;

const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 95%;
  min-height: 50vh;
  border-radius: 10px;
  border: 0.2px solid #828ed1;
  line-height: 1.5;
  float: left;
  background-color: rgba(246, 246, 246, 0.55);
  margin-bottom: 15px;
  resize: none;
  max-length: 1000;

  &::placeholder {
    font-size: 13px;
  }

  &:focus {
    outline:none;
  }

  // 스크롤바
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

// 신고 내용 글자 수 출력란
const CalcLength = styled.div`
  font-size: 12px;
  margin-left: 85%;
  margin-top: 100px;
`;

// 소멸 조회수 설정부
const ExtinctWrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtinctTitle = styled.div`
  font-size: 15px;
  color: #828ED1;
  font-weight: bold;
  margin-top: 5px;
`;

const ExtinctSettingBar = styled.div`
  width: 50%;
  height: 15px;
  background-color: #A7B7DE;
  margin-top: 30px;
  border-radius: 10px;
  
  display: flex;
  justify-content: space-around;
`;

const ExtinctButton = styled.button`
  width: 10px;
  height: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.color};
  border: 1px solid #828ed1;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #828ed1;
    border: 1px solid #828ed1;
  }
`;

const ExtinctTextBox = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-around;
  margin-top: 10px;
`;

const ExtinctText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #8e82d1;    
  cursor: pointer;

  &:hover {
    font-weight: bold;
    font-size: 15px;
  }
`;

// 등록 버튼
const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  text-align: center;
  color: #828ed1;
`;

const Button = styled.div`
  padding: 10px 30px;
  width: 120px;
  border-radius: 15px;
  font-weight: bold;
  margin: auto;
  border: 0.2px solid #828ed1;
  cursor: pointer;

  &:hover {
    background-color: #828ed1;
    color: white;
  }
`;

const TempSaveHref = styled.a`
  color: #828ED1;
  margin-top: 10px;
  font-size: 15px;
`;

const Create = () => {

  const handleStampSelectClick = () =>{
    window.location.href = "/stampselect";
  };

  const [color, setColor] = useState("white");

  const handleClick = () => {
    color === "white" ? setColor("#828ed1") : setColor("red");
  }

  return (
    <>
      <Container>
        <TextContainer>
          <img
            src={stamps.stamp_example}
              alt="우표 이미지"
              style={{ 
                width: "120px", 
                float: "left",
                marginTop: "4px"}}
                onClick={handleStampSelectClick}
          />
          <CalcLength>(0000/1000)</CalcLength>
          <ContentTextArea 
          placeholder={`부엉이 우편함은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 이용 규칙을 제정해 운영하고 있어요.

  하위 내용 작성시 신고 조치될 수 있어요.
  ·욕설 / 비방
  ·허위사실 유포
  ·광고 / 음란성 게시물
  ·도배성 글`}/>
        </TextContainer>
        
        <ExtinctWrapper>
          <ExtinctTitle>이 편지를 읽을 부엉이 수를 선택해주세요.</ExtinctTitle>
          <ExtinctSettingBar>
            <ExtinctButton onClick={handleClick} color="white"></ExtinctButton>
            <ExtinctButton onClick={handleClick} color="white"></ExtinctButton>
            <ExtinctButton onClick={handleClick} color="white"></ExtinctButton>
            <ExtinctButton onClick={handleClick} color="white"></ExtinctButton>
          </ExtinctSettingBar>
          <ExtinctTextBox>
              <ExtinctText>5부엉</ExtinctText>
              <ExtinctText>10부엉</ExtinctText>
              <ExtinctText>30부엉</ExtinctText>
              <ExtinctText>50부엉</ExtinctText>
            </ExtinctTextBox>
        </ExtinctWrapper>
        <Link to="/" style={{"textDecoration":"none"}}>
        <ButtonWrapper>
          <Button>등록하기</Button>
        </ButtonWrapper>
        </Link>
        <Link to="/" style={{"textDecoration":"none"}}><TempSaveHref>임시저장하기</TempSaveHref></Link>
      </Container>
    </>
  );
};
export default Create;

