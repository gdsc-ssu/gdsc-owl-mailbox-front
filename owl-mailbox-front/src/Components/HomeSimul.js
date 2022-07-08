import React from "react";
import styled from "styled-components";
import MapSimul from "../Icons/map_simul.png";
import OwlMarkerImg from "../Icons/owl_open.png";
import MypageImg from "../Icons/mypage_icon.png";
import LetterPostImg from "../Icons/letter_post_icon.png";
import LetterMarkerImg from "../Icons/letter_marker_icon.png";
import { Link } from "react-router-dom";

// 전체 컨테이너
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// 지도 시뮬 이미지
const MapSimulImg = styled.img`
    width: 100%;
`;

// owl marker
const OwlMarker = styled.img`
    width: 70px;
    position: absolute;
    top: 530px;
    left: 230px;
`;

// letter marker
const LetterMarker = styled.img`
    width: 110px;
`; 

// 페이지 이동 버튼셋
const ButtonSet = styled.div`
    display: flex;
`;

// 편지수 & 우표수 버튼 박스
const NumberBtn = styled.div`
    position: fixed;
    bottom: 2vh;
    left: 70px;
    width: 170px;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 3px 3px 5px gray;
    border-radius: 10px; 

    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-around;
`;

const NumberBtnContent = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-around;
    margin-bottom: 5px;
`;

const NumberBtnCounter = styled.div`
    font-size: 40px;
    color: #828ED1;
    font-weight: bold;
    text-align: center;
`;

const NumberBtnTitle = styled.div`
    font-size: 13px;
    color: #828ed1;
    cursor: pointer;
`;

// 페이지 이동 버튼 박스
const LinkPageBtn = styled.div`
    position: fixed;
    bottom: 2vh;
    right: 60px;
    width: 170px;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 3px 3px 5px gray;
    border-radius: 10px; 

    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-around;
`;

const LinkPageBtnContent = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-around;
    margin: 0 0 10px 5px;
`;

const LinkPageBtnIconImg = styled.img`
    width: 50px;
    margin-top: 5px;
`;

const LinkPageBtnTitle = styled.div`
    font-size: 13px;
    color: #828ed1;
    cursor: pointer;
`;



const HomeSimul = (props) => {
    return (
      <>
        <Container>
            <MapSimulImg src={MapSimul} alt="map-simul-img" />
            <OwlMarker src={OwlMarkerImg} alt="owl-marker" />
            <Link to="/viewpage/letter"><LetterMarker src={LetterMarkerImg} alt="letter-marker" 
                style={{
                    "position": "absolute", "top":"680px", "left":"55px" 
                }}
            />
            </Link>

            <Link to="/viewpage/letter">
            <LetterMarker src={LetterMarkerImg} alt="letter-marker" 
                style={{
                    "position": "absolute", "top":"300px", "right":"55px" 
                }}
            />
            </Link>

            <ButtonSet>
                <NumberBtn>
                    <NumberBtnContent>
                        <NumberBtnCounter>2</NumberBtnCounter>
                        <NumberBtnTitle>편지 수</NumberBtnTitle>
                    </NumberBtnContent>
                    <NumberBtnContent>
                        <NumberBtnCounter>5</NumberBtnCounter>
                        <NumberBtnTitle>우표 수</NumberBtnTitle>
                    </NumberBtnContent>
                </NumberBtn>

                <LinkPageBtn>
                    <LinkPageBtnContent>
                        <LinkPageBtnIconImg src={MypageImg} alt="letter-post-icon" />
                        <LinkPageBtnTitle>편지 작성</LinkPageBtnTitle>
                    </LinkPageBtnContent>
                    <LinkPageBtnContent>
                        <LinkPageBtnIconImg src={LetterPostImg} alt="mypage-icon" style={{"margin-left": "8px"}}/>
                        <LinkPageBtnTitle>마이 페이지</LinkPageBtnTitle>
                    </LinkPageBtnContent>
                </LinkPageBtn>
            </ButtonSet>
        </Container>
      </>
    );
  };
  export default HomeSimul;