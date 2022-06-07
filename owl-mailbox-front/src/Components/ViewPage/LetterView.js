import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

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

const LetterElement = styled.div`
    width: 85%;
    height: 100px;
    border: 1px solid #828ed1;
    background-color: #F6F6F6;
    border-radius: 20px;
    margin: 10px;

    display: flex;
    flex-direction: column;
`;

const LetterInfo = styled.div``;

const LetterTitle = styled.div`
    font-size: 15px;
    color: #828ed1;
    font-weight: 600;
    padding: 8px 15px;
    float: left;
`;

const LetterDate = styled.div`
    float: right;
    padding: 10px 15px;
    font-size: 12px;
    color: #828ed1;
    font-weight: 500;
    margin-top: 3px;
`;

const LetterContent = styled.div`
    padding: 0 10px;
    margin-left: 5px;
    font-size: 15px;
    color: #828ed1;
`;

const LetterView = () => {
    return (
        <Container>
            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>

            <LetterElement>
                <LetterInfo>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                    <LetterDate>2022.02.21</LetterDate>
                </LetterInfo>
                <LetterContent>편지 첫 한 줄만 미리 보여주기 글자 수 제한해서 보여줄 수 있으면 좋겠습...</LetterContent>
            </LetterElement>
        </Container>
        
    )
};
export default LetterView;
