import React, {useState} from "react";
import {FormVenteCmpnt,NavBar} from '../organisms'
import { ThemeProvider, styled } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Heading, Section } from "../atoms";

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

const StyleSellPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 24px;
`; 

function SellComponent() {

    const [isNightMode, setIsNightMode] = useState(true);

    const invert = () => (isNightMode ? day : night);
  

  return (
    <Provider store={store}>
        <ThemeProvider theme={invert(isNightMode)}>
          <NavBar title="Element Craft"></NavBar>
          <StyleSellPage>
            <Section>
              <Heading marginLeft="8px">Vendre un composant</Heading>
            </Section> 
            <FormVenteCmpnt></FormVenteCmpnt>
          </StyleSellPage>
           
        </ThemeProvider>
    </Provider>
  );
}

export default SellComponent;