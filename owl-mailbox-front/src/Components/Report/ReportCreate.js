// 신고 사유 작성 페이지

import React from "react";
import styled from "styled-components";

// 신고 사유 작성 페이지 박스
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

// 내용 작성 및 신고 목록 타이틀
const Title = styled.div`
  color: #828ED1;
  font-size: 16px;
  font-weight: bold;
  align-items: left;
`;

// 신고 제목 입력란
const ReportTitleInput = styled.input`
  padding: 10px 15px;
  width: 95%;
  border-radius: 10px;
  border: 1px solid #D2D2D2;
  background-color: #F6F6F6;
  margin: 5px 0 15px 0;

  &:focus {
    outline:none;
  }
`;

// 신고 내용 입력란
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

// 신고 내용 글자 수 출력란
const CalcLength = styled.div`
  font-size: 12px;
  margin-left: 93%;
`;

// 신고하기 버튼
const Button = styled.button`
    margin-left: 84%;

    width: 120px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #828ED1;
    background: none;

    font-weight: bold;
    font-size: 15px;
    color: #828ED1;
`;

// 영역 구분 선
const StyledLine = styled.hr`
  margin: 20px 0 7px 0;
  border-top: 1px solid rgba(60, 60, 67, 0.29);

  && {
    padding: none;
    width: 100%;
  }
`;

// 신고 목록 박스
const ReportListBox = styled.div`
  width: 100%;
  min-height: 10vh;
  max-height: 30vh;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #828ED1;
    border-radius: 6px;
  }

`;

// 신고 목록
const ReportList = styled.div`
  display: flex;
  flex-direction: row;
`;

// 신고 날짜 & 제목
const ReportInfo = styled.div`
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  line-height: 2;
`;

// 신고 내역 삭제하기 버튼
const DeleteBtn = styled.button`
  padding: 10px 15px;
  margin-left: 72%;

  height: 15px;
  border: none;
  background-color: #FFFFFF;

  font-size: 12px;
  font-weight: bold;
  color: #828ED1;
  
`;

const ReportCreate = () => {
  const handleReportViewClick = () =>{
    window.location.href = "/report/view";
  };
    return (
      <>
        <Container onClick={handleReportViewClick}>
          <Title>내용 작성</Title>
          <ReportTitleInput placeholder={`신고 사유 제목을 입력해주세요.`}/>
          {/* 신고 사유 글자 수 계산 후 value로 적용 */}
          <CalcLength>(0/500)</CalcLength>
          <ReportContentTextarea placeholder={`신고 내용을 입력해주세요.`} />
          <Button>신고하기</Button>
          <StyledLine />

          <Title>신고 목록</Title>
          <StyledLine />
          <ReportListBox>

            <ReportList>
              <ReportInfo>2022.02.26 11:03<br />신고글입니다.</ReportInfo>
              <DeleteBtn>삭제하기</DeleteBtn>
            </ReportList>
            <StyledLine />

            <ReportList>
              <ReportInfo>2022.02.27 11:03<br />신고글입니다.</ReportInfo>
              <DeleteBtn>삭제하기</DeleteBtn>
            </ReportList>
            <StyledLine />

            <ReportList>
              <ReportInfo>2022.02.28 11:03<br />신고글입니다.</ReportInfo>
              <DeleteBtn>삭제하기</DeleteBtn>
            </ReportList>
            <StyledLine />

            <ReportList>
              <ReportInfo>2022.03.01 11:03<br />신고글입니다.</ReportInfo>
              <DeleteBtn>삭제하기</DeleteBtn>
            </ReportList>
            <StyledLine />

            <ReportList>
              <ReportInfo>2022.03.02 11:03<br />신고글입니다.</ReportInfo>
              <DeleteBtn>삭제하기</DeleteBtn>
            </ReportList>
            <StyledLine />

          </ReportListBox>
        </Container>
      </>
    );
  };
  export default ReportCreate;