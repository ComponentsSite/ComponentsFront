import React, {useState} from "react";
import {Form} from '../organisms'
import { ThemeProvider, styled } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../../store";
import { NightModeProvider } from "../../contexts"
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
  

const StyledAppContainer = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center;
  color: ${(props) => props.theme.secondary}
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
  height: 100Vh;
`;

function Connexion() {

    const [isNightMode, setIsNightMode] = useState(true);

    const invert = () => (isNightMode ? day : night);
  

  return (
    <Provider store={store}>
        <ThemeProvider theme={invert(isNightMode)}>
        <NightModeProvider
        value={{
          changeNightMode: () => {
            setIsNightMode(!isNightMode);
          },
          nightMode: isNightMode,
        }}
      >
        <StyledAppContainer> 
           <Section>
            <Heading marginLeft="8px">Connexion</Heading>
           </Section> 
            <Form />
            </StyledAppContainer>
        </NightModeProvider>
        </ThemeProvider>
    </Provider>
  );
}

export default Connexion;