import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { arrows } from "../Icons/Resources";

// const Container = styled.div`
//     // width: 100%;
// `;


const Nav = styled.div`
    height: 20px;
    padding: 18px 0;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-weight: bold;
    font-size: 20px;
    color: #5a7cd3;
`;

const NavBot = (props) => {
    return (
      <>
      {/* <Container> */}
              <Nav style={{ textAlign: "center"}}>                 
              <Link to="/">
              <img
                      src={arrows.left_arrow}
                      alt="왼쪽 화살표"
                      style={{ width: "18px", float: "left", marginTop: "4px", marginLeft: "10px"}}
              />
              </Link>
                    {props.name}</Nav>
        {/* </Container> */}
      </>
    );
  };
  export default NavBot;