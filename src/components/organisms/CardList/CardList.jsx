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

const CardList = ({ data,text, urlMain, title, component, ...props }) => {
  return (
    <StyleListCard>
      {data.map((x, i) => {
        const { url, text, urlMain,title,component } = x;
        return (
          <CompleteCard key={i} urlMain={urlMain} text={text} title={title} url={url} component={component}> 
          </CompleteCard>
        );
      })}
      {props.children}
    </StyleListCard>
    
  );
};

export default CardList;