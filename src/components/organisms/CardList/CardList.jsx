import React from "react";
import { CompleteCard } from "../../molecules";
import styled from "styled-components";
import { Paragraph } from "../../atoms";

const StyleListCard = styled.ul`
  display:flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const CardList = ({ data,text, name, title, component, ...props }) => {
  return (
    <StyleListCard>
      {data.map((x, i) => {
        const { url, text, name,title,component } = x;
        return (
          <CompleteCard key={i} name={name} text={text} title={title} url={url} component={component}> 
          </CompleteCard>
        );
      })}
      {props.children}
    </StyleListCard>
    
  );
};

export default CardList;