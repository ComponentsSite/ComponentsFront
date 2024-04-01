import React from "react";
import {FormAchatCmpnt, NavBar} from '../organisms'
import { Provider } from "react-redux";
import { store } from "../../store";
import { Heading, Section } from "../atoms";
import styled from "styled-components";

const StyleBuyPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 24px;
`;  

function BuyComponent() {

  return (
    <Provider store={store}>
      <NavBar title="Element Craft">
      </NavBar>
      <StyleBuyPage>
        <Section>
          <Heading marginLeft="8px">Achat</Heading>
        </Section> 
        <FormAchatCmpnt />
      </StyleBuyPage>
    </Provider>
  );
}

export default BuyComponent;