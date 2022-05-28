import React from "react";
import styled from "styled-components";
import { stamps } from "../Icons/Resources";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    padding: 30px;

`;
const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 95%;
  min-height: 60vh;
  border-radius: 10px;
  border: 0.2px solid #828ed1;
  line-height: 1.5;
  float: left;
  background-color: rgba(246, 246, 246, 0.55);
  margin-bottom: 15px;
  resize: none;
  max-length: 1000;
  ::placeholder {
    font-size: 13px;
  }


`;
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
  padding: 6px 30px;
  width: 50%;
  border-radius: 15px;
  font-weight: bold;
  margin: auto;
  border: 0.2px solid #828ed1;
`;

const Stamp = styled.img`
  width: 30%;
  float: right;
`;

const Create = () => {
  return (
    <>
      <Container>
        <ContentTextArea 
        placeholder={`부엉이 우편함은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 이용 규칙을 제정해 운영하고 있어요.

하위 내용 작성시 신고 조치될 수 있어요.
·욕설 / 비방
·허위사실 유포
·광고 / 음란성 게시물
·도배성 글`}/>
        <ButtonWrapper>
          <Button>등록하기</Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Create;

