import React from "react";
import styled from "styled-components";
import { makingOwl_logo } from "../../../../Icons/Resources";


const Container = styled.div`
    margin-top: 170px;
`;
const TotalWrapper = styled.div`
  margin: 30px auto;
  text-align: center;
  display: flex;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  @media (max-width: 430px) {
  }
`;

const SubText = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 430px) {
  }
`;

const Logo = styled.img`
  margin: 0 auto;
  width: 60px;
`;

const Line1 = styled.div`
  width: 0;
  height: 200px;
  margin: 0 10px;
  text-align: center;
  border: solid 0.5px #828ed1;
`;



const MakingOwl = () => {
    return (
        <Container>
            <TotalWrapper>
                <SubWrapper>
                    <Logo
                    src={makingOwl_logo.notion_logo}
                    onClick={() =>
                        window.open("https://www.notion.so/gdsc-owl-mailbox-8d30801962d3443ead79766a9e4cfc46"
                        )
                    }
                    />
                    <SubText>노션에서 확인하기</SubText>
                </SubWrapper>
                <Line1 />
                <SubWrapper>
                    <Logo
                    src={makingOwl_logo.github_logo}
                    onClick={() =>
                        window.open("https://github.com/gdsc-ssu/gdsc-owl-mailbox-front"
                        )
                    }
                    />
                    <SubText>깃허브에서 확인하기</SubText>
                </SubWrapper>
            </TotalWrapper>
        </Container>
    )
  };
  export default MakingOwl;
  