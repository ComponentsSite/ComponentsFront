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
  justify-content: center;
  width: 100%;
`;

const NavBar = ({ title, text,icon, handler, ...props }) => {
    
  return (
    <StyleNavBar handler={handler}>
      <Section>
        <Heading marginLeft="8px">{title}</Heading>
      </Section>
        <Link to="/home"><Btn icon={<FaHouse/>}></Btn></Link>
        <Link to="/profil"><Btn icon={<FaUser/>}> </Btn></Link>
        <Link to="/sellcomponent"><Btn icon={<FaMoneyBillWaveAlt />}></Btn></Link>
        {props.children}
    </StyleNavBar>
  );
};

export default NavBar;