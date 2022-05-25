import styled from "styled-components";
import React from "react";
import { stamps } from "./Icons/Resources";


const BoardContainer = styled.div`
    width: 93%;
    min-height: 80vh;
    border-radius: 5px;
    margin: 15px auto;
    color: #5a7cd3;
`;

const BoardChildContainer = styled.div`
    width: 90%;
    margin: 30px auto;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #5a7cd3;

`;

const BoardChildStamp = styled.img`
    width: 30%;
    height: 30%;
    margin: 10px;
`;

const BoardChildContent = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    width: 93%;
    margin: 10px;
`;

const BoardChildDate = styled.div`
    float: right;
    margin: 100px 10px 0px 0px;
    font-size: 13px;
`;

const BoardChildName = styled.div`
    float: right;
    font-size: 12px;
    margin: 10px;
    padding-bottom: 100px;

`;
const Board = () => {
    return (
            <BoardContainer>
                <BoardChildContainer style={{paddingBottom: "35px"}}>
                    <BoardChildStamp 
                        src={stamps.postage_stamp}
                        alt="우표">
                    </BoardChildStamp>
                    <BoardChildDate>2022.02.21</BoardChildDate>
                    <BoardChildContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec eleifend sem. Proin iaculis iaculis erat ac faucibus. Vivamus malesuada feugiat purus ac venenatis. Quisque vitae dui rhoncus, pharetra neque congue, lacinia arcu. Donec urna nunc, maximus non cursus in, semper a orci. Nam euismod, lacus quis aliquet lobortis, ipsum arcu lacinia orci, sed lobortis sapien dolor eget purus. Nullam porta congue nunc, sit amet lacinia diam aliquet id. Donec pellentesque vel ante eget sodales. Pellentesque interdum lacinia risus, ut interdum libero pulvinar vel.
                    </BoardChildContent>
                    <BoardChildName>익명의 부엉이</BoardChildName>
                </BoardChildContainer>
            </BoardContainer>
    )
  };
  export default Board;
  