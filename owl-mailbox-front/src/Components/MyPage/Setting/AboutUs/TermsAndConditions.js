import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  width: 75%;
  flex-direction: column;
  margin-top: 30px;
  background-color: #f1f1f1;
  border-radius: 10px;
  min-height: 100px;
  border: 1px solid #d2d2d2;
  padding: 10px;
  font-size: 17px;
`;

const TermsAndConditions = () => {
    return (
        <>
        <Container>
        <div >
        `부엉이 우편함은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 이용 규칙을 제정해 운영하고 있어요.
        <br /><br />

하위 내용 작성시 신고 조치될 수 있어요. <br />
&nbsp;&nbsp;&nbsp;
·욕설 / 비방<br />
&nbsp;&nbsp;&nbsp;
·허위사실 유포<br />
&nbsp;&nbsp;&nbsp;
·광고 / 음란성 게시물 <br />
&nbsp;&nbsp;&nbsp;
·도배성 글`
        </div>
        </Container>
        </>
    )
}

export default TermsAndConditions;