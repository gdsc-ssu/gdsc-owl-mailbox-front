import React from "react";
import styled from "styled-components";
import Stamp from "../../Icons/stamp_example.png";
import ReportIconBefore from "../../Icons/report_icon_red.png";

const Container = styled.div`
    width: 100%;
    margin-top: 30px;
`;

const LetterContent = styled.div`
    width: 85%;
    min-height: 400px;
    max-height: 500px;
    border: 1px solid #828ed1;
    border-radius: 20px;
    color: #6B6B6B;
    margin: auto;
    padding: 20px 10px;
    white-space:pre-wrap;
    overflow: scroll;

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
        background-color: none;
        border-bottom-right-radius: 10px;
    }
`;

const StampImg = styled.img`
    width: 150px;
    float: right;
`;

const LetterInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 50px;
    float: right;
`;

const LetterTitle = styled.div`
    color: #828ed1;
    font-size: 13px;
    font-weight: bold;
`;

const LetterDate = styled.div`
    color: #828ed1;
    font-size: 13px;
    font-weight: bold;
    text-align: end;
`;

const ReportIconBeforeBtn = styled.img`
    width: 60px;
    float: right;
    margin-top: 10px;
    margin-right: 80px;
`;

const LetterView = () => {
    const handleReportCreateClick = () =>{
        window.location.href = "/report/create";
      };

    return (
        <Container>
            <LetterContent>
                <StampImg src={Stamp} alt="stamp_image"></StampImg>
                GDSC Soongsil is a community group for Soongsil University students interested in programming and Google technology. <br />

                We know the importance of growing together, and we share each other's knowledge and experiences. <br />

                We also work to close the gap between theory and industry. <br /> <br />

                <b>GDSC Soongsil has three parts.</b> <br />
                - Web/Mobile Part <br />
                - Server/Cloud Part <br />
                - AI/ML Part <br />
                Each member learns deeply in their own part, and expands their knowledge through interaction with each other. <br /> <br />

                <b>We are going to do</b> <br />
                - Networking <br />
                - Study and Project <br />
                - Open technical seminars <br />
                - Solution challenge <br /> <br />


                If you love programming, <br />
                If you have a clear goal and can keep your passion, <br />
                If you believe you can change the world yourself, <br />
                If you want human networking and are interested in technology-related communications, <br />
                If you know the value of growing together, not alone... <br /> <br />

                <b>JOIN US!!</b>
                <LetterInfo>
                    <LetterDate>2022.02.21</LetterDate>
                    <LetterTitle>익명의 부엉이</LetterTitle>
                </LetterInfo>
            </LetterContent>
                <ReportIconBeforeBtn src={ReportIconBefore} alt="report_icon_red" onClick={handleReportCreateClick}></ReportIconBeforeBtn>
        </Container>
        
    )
};
export default LetterView;
