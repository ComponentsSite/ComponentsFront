import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
    border: 1px solid grey;
    border-raduix: 4px;
`;

const Card = (props) => {
return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;