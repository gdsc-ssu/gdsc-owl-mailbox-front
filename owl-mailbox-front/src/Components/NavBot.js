import React from "react";
import styled from "styled-components";
import { arrows } from "../Icons/Resources";
// import { arrows } from "../../Icons/Resources";

const Container = styled.div`
    width: 100%;
`;


const Nav = styled.div`
    height: 20px;
    padding: 18px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-weight: bold;
    font-size: 20px;
    color: #5a7cd3;
`;

const NavBot = () => {
    return (
      <>
      <Container>
              <Nav style={{ textAlign: "center"}}>                 
              <img
                      src={arrows.left_arrow}
                      alt="왼쪽 화살표"
                      style={{ width: "18px", float: "left", marginTop: "4px"}}
                    ></img>마이 페이지</Nav>
        </Container>
      </>
    );
  };
  export default NavBot;