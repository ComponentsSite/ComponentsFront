import React, {useState} from "react";
import {FormConnexion} from '../organisms'
import { ThemeProvider } from "styled-components";
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
  

function Connexion() {

    const [isNightMode, setIsNightMode] = useState(true);

    const invert = () => (isNightMode ? day : night);
  

  return (
    <Provider store={store}>
      <ThemeProvider theme={invert(isNightMode)}>
        <Section>
          <Heading marginLeft="8px">Connexion</Heading>
        </Section> 
        <FormConnexion />
      </ThemeProvider>
    </Provider>
  );
}

export default Connexion;