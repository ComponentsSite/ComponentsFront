import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
    background: ${(props) => (props.color ? props.color : props.theme.primary)};;
    width: 200px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    
    &:hover {
      background: #EA4C89;
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
`;

const InputText = ({...props}) => {
 
    // const [value, setValue] = useState("");
    // const handleText = (e) => {
    //   if (value !== e.target.value) {
    //     setValue(e.target.value);
    //   }

  return (
    <>
      <StyledInput  {...props} />
    </>
  );
};

export default InputText;