import React from "react";
import styled from "styled-components";
import Stamp from "../../Icons/stamp_example.png";

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
`;

const LetterView = () => {
    return (
        <Container>
            <LetterContent>
            <StampImg src={Stamp} alt="stamp_image"></StampImg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla sapien ac auctor ac ayctor pellentesque. Suspendisse elementum pharetra massa vel pretium. Fusce congue luctus lectus vel pellentesque. Sed ornare velit sem, id dapibus magna euismod id. In congue arcu sed congue dignissim. Donec accumsan purus eu fermentum sodales. Donec imperdiet porttitor lectus. Suspendisse nec venenatis risus, a tempus turpis. Aenean faucibus, leo non rutrum ornare, velit elit dignissim erat, id interdum nunc lacus ut ligula. Mauris molestie tortor at ex scelerisque luctus. Quisque sit amet dolor vel lacus vulputate cursus. Nulla varius mattis interdum. Nullam sit amet tristique velit.
Nam vel ligula molestie quam mollis malesuada. Donec eu maximus orci. Vivamus consequat pulvinar est quis dignissim.Nam vel ligula molestie quam mollis malesuada. Donec eu maximus orci. Vivamus consequat pulvinar est quis dignissim.Nam vel ligula molestie quam mollis malesuada. Donec eu maximus orci. Vivamus consequat pulvinar est quis dignissim.Nam vel ligula molestie quam mollis malesuada. Donec eu maximus orci. Vivamus consequat pulvinar est quis dignissim. 
            <LetterInfo>
                <LetterDate>2022.02.21</LetterDate>
                <LetterTitle>익명의 부엉이</LetterTitle>
            </LetterInfo></LetterContent>
        </Container>
        
    )
};
export default LetterView;
