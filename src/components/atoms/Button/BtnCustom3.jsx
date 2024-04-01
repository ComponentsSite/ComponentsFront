import React from "react";
import styled from "styled-components";

const StyleBtn = styled.button`
  --c: #fff;
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,#004dff;
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
  text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
  outline-offset: .1em;
  transition: 0.3s;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: .1em .3em;
  &:hover, :focus-visible{
    --_p: 0%;
    --_i: 1;
  }
  &:active{
    text-shadow: none;
    color: var(--c);
    box-shadow: inset 0 0 9e9q #0005;
    transition: 0s;
  }
`;

const BtnCustom3 = ({ icon = <></>, text = "", ...props }) => {
  return (
    <StyleBtn {...props}>
      {icon}
      {text}
    </StyleBtn>
  );
};

export default BtnCustom3;