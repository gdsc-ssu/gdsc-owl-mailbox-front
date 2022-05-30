// 신고글 조회 페이지

import React from "react";
import styled from "styled-components";

// 신고글 조회 박스
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

// 카테고리 타이틀 & 신고글 작성 일자 정보 제공 박스
const InfoBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

// 신고글 조회 카테고리 타이틀
const Title = styled.div`
    color: #828ED1;
    font-size: 16px;
    font-weight: bold;
    align-items: left;
`;

// 신고글 작성 일자
const ReportInfo = styled.div`
    padding-top: 10px;
    margin-left: 53%;
    font-size: 12px;
    font-weight: 500;
`;

// 신고글 제목란
const ReportTitle = styled.div`
    padding: 10px 15px;
    width: 95%;
    border-radius: 10px;
    border: 1px solid #D2D2D2;
    background-color: #F6F6F6;
    margin: 5px 0 15px 0;
    font-size: 13px;
`;

// 신고 내용 글자 수 출력란
const ReportLengthInfo = styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-left: 86%;
`;

// 신고 내용 출력란
const ReportContentTextarea = styled.textarea`
    padding: 10px 15px;
    width: 95%;
    min-height: 30vh;
    max-length: 100;

    border-radius: 10px;
    border: 1px solid #D2D2D2;
    background-color: #F6F6F6;

    line-height: 1.5;
    margin: 5px 0 15px 0;
    resize: none;

    &:focus {
    outline:none;
    }
`;

const ReportView = () => {
    return (
        <>
            <Container>
                <InfoBox>
                    <Title>신고글 조회</Title>
                    <ReportInfo>2022.02.26 11:03 작성</ReportInfo>
                </InfoBox>
                <ReportTitle>욕설을 포함한 편지 내용을 신고합니다.</ReportTitle>
                <ReportLengthInfo>(350/500)</ReportLengthInfo>
                <ReportContentTextarea readOnly>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, 
                </ReportContentTextarea>
            </Container>
        </>
    );
};
export default ReportView;