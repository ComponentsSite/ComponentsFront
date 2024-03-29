import React from "react";
import styled from "styled-components";
import { Btn , Heading, Section } from "../../atoms";
import { Link } from "react-router-dom";
import {
  FaHouse 
} from "react-icons/fa6";
import {
  FaUser,
  FaMoneyBillWaveAlt
} from "react-icons/fa";


const StyleNavBar = styled.nav`
    display: flex;
    transform-style: preserve-3d;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
    margin: 0px auto;
    perspective: 2000px;
    flex-wrap: wrap;
    top: 3em;
    margin-bottom: 
`;

const NavBar = ({ title, text,icon, handler, ...props }) => {
    
  return (
    <StyleNavBar handler={handler}>
      <Section>
        <Heading marginLeft="8px">{title}</Heading>
      </Section>
        <Link to="/"><Btn icon={<FaHouse/>}></Btn></Link>
        <Link to="/profil"><Btn icon={<FaUser/>}> </Btn></Link>
        <Btn  icon={<FaMoneyBillWaveAlt />}></Btn>
        {props.children}
    </StyleNavBar>
  );
};

export default NavBar;