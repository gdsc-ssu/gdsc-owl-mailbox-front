/* global kakao */

//사이트 도메인을 http://localhost:3000 만 등록해놓아써영
//이건 확인용! 원래는 명준님이 발급받으신 곳에 도메인 등록해야함다
import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

//지도 컨테이너
const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Home = () => {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.49460853935436, 126.95981649289503),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);
        }, [])
    
    
        return (
            <>
                <Container id="map"/>
            </>
        )
};

export default Home;
