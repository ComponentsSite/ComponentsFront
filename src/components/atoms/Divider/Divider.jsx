import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  border: 0;
  border-bottom: $separator-size dotted $separator-border-color;
  width: 0;
  animation: separator-width 1.5s ease-out forwards;
`;

class Divider extends React.Component {
  
  render() {
    return (
      <StyledDivider>
      </StyledDivider>        
    );
  }
}

export default Divider;