import React, {useState} from "react";
import {FormAchatCmpnt, NavBar} from '../organisms'
import { Provider } from "react-redux";
import { store } from "../../store";
import { Heading, Section } from "../atoms";
import {styled, ThemeProvider} from "styled-components";

const day = {
  primary: 'linear-gradient(45deg, #FC466B, #3F5EFB);',
  secondary: "black",
  tertiary: "#592519",
  textNavbar:"white"
}

const night = {
  primary:"#592519",
  secondary: "white",
  tertiary: "#fef8f8",
  textNavbar:"black"
}

const StyleBuyPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 24px;
`;  

function BuyComponent() {

  const [isNightMode, setIsNightMode] = useState(true);

  const invert = () => (isNightMode ? day : night);

  return (
    <Provider store={store}>
      <ThemeProvider theme={invert(isNightMode)}>
        <NavBar title="Element Craft">
        </NavBar>
        <StyleBuyPage>
          <Section>
            <Heading marginLeft="8px">Achat</Heading>
          </Section> 
          <FormAchatCmpnt />
        </StyleBuyPage>
      </ThemeProvider>  
    </Provider>
  );
}

export default BuyComponent;