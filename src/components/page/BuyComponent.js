import React, {useState} from "react";
import {Form} from '../organisms'
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

const formData = [
  {
    value: "",
    label: "Nom du composant",
  },
  {
    value: "",
    label: "Type de composant",
  },
  {
    value: "",
    label: "Prix",
  },
  {
    value: "",
    label: "Code css",
  },
];


function BuyComponent() {

    const [isNightMode, setIsNightMode] = useState(true);

    const invert = () => (isNightMode ? day : night);
  

  return (
    <Provider store={store}>
        <ThemeProvider theme={invert(isNightMode)}>
           <Section>
            <Heading marginLeft="8px">Vendre un composant</Heading>
           </Section> 
            <Form />
        </ThemeProvider>
    </Provider>
  );
}

export default BuyComponent;