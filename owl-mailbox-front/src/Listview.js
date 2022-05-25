import styled from "styled-components";
import React from "react";

const BoardContainer = styled.div`
    width: 93%;
    min-height: 80vh;
    border-radius: 15px;
    margin: 15px auto;
    color: #5a7cd3;
`;

const BoardChildContainer = styled.div`
    width: 90%;
    margin: 23px auto;
    margin-top: 30px;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 15px;
    border: 1px solid #828ed1;
    background-color: rgba(246, 246, 246, 0.55);
`;

const BoardChildTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    float: left;

`;
const BoardChildContent = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    width: 93%;
    margin-bottom: 8px;
`;
const BoardChildDate = styled.div`
    float: right;
    font-size: 10px;
`;

//TODO : ListView 관련 Api 사용해서 n개씩 리스트 받아오기

const ListView = () => {
    return (
            <BoardContainer>
                <BoardChildContainer>
                    <BoardChildTitle>
                        보낸 사람
                    </BoardChildTitle>
                    <BoardChildDate>2022.02.21</BoardChildDate>
                    <BoardChildContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec eleifend sem. Proin iaculis iaculis erat ac faucibus. Vivamus malesuada feugiat purus ac venenatis. Quisque vitae dui rhoncus, pharetra neque congue, lacinia arcu. Donec urna nunc, maximus non cursus in, semper a orci. Nam euismod, lacus quis aliquet lobortis, ipsum arcu lacinia orci, sed lobortis sapien dolor eget purus. Nullam porta congue nunc, sit amet lacinia diam aliquet id. Donec pellentesque vel ante eget sodales. Pellentesque interdum lacinia risus, ut interdum libero pulvinar vel.
                    </BoardChildContent>
                </BoardChildContainer>
            </BoardContainer>
    )
  };
  export default ListView;
  