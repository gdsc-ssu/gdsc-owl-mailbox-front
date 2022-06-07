import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const ReportSection = styled.div`
    width: 100%;
    height: 30vh;
    background-color: rgba(218, 221, 252, 0.8);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const CancelSection = styled.div`
    width: 100%;
    padding: 12px 0;
    margin-top: 10px;
    background-color: rgba(218, 221, 252, 0.8);
    border-radius: 20px;
    text-align: center;
    color: #007aff;
`;

const SectionTitle = styled.div`
    width: 100%;
    height: 5vh;
    margin-top: 15px;
    color: #979797;
`;

const ReportReason = styled.div`
    width: 100%;
    height: 5vh;
    color: #007AFF;
`;

const ReportSelect = () => {
    return (
        <>
        <Container>
            <ReportSection>
                <SectionTitle>신고 사유 선택<hr/></SectionTitle>
                <ReportReason>욕설/비하<hr/></ReportReason>
                <ReportReason>허위 사실 유포/도배성 글<hr/></ReportReason>
                <ReportReason>유출/사칭/사기<hr/></ReportReason>
                <ReportReason>음란물/불건전한 게시글<hr/></ReportReason>
                <ReportReason>정당/정치인 비하 및 선거운동<hr/></ReportReason>
                <ReportReason>상업적 광고 및 판매</ReportReason>
            </ReportSection>
            <CancelSection>취소</CancelSection>
        </Container>
        </>
    );
};
export default ReportSelect;