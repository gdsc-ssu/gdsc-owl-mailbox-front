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
  font-size: 13px;
`;
const Privacy = () => {
    return (
        <>
        <Container>
            이것은 개인정보처리법관련이다~~
        </Container>
        </>
    )
}

export default Privacy;