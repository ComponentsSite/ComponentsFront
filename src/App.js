import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profil,Connexion } from "./components/page";
import {ThemeProvider, styled} from "styled-components";
import { NightModeProvider } from "./contexts"
import { NightModeSwitch } from "./components/molecules";
import { Provider } from "react-redux";
import { store } from "./store";

const StyledAppContainer = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center;
  color: ${props => props.theme.secondary}
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
  height: 100vh;
`;

const day = {
  primary: 'linear-gradient(45deg, #FC466B, #3F5EFB);',
  secondary: "black",
  tertiary: "white",
  textNavbar:"white"
}

const night = {
  primary:"linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);",
  secondary: "white",
  tertiary: "#fef8f8",
  textNavbar:"black"
}

function App() {

  const [isNightMode, setIsNightMode] = useState(true);

  const invert = () => (isNightMode ? day : night);

  const handleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

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
            <NightModeSwitch
              isNightMode={isNightMode}
              handler={handleNightMode}
            ></NightModeSwitch>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Connexion/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/profil" element={<Profil/>} />
              </Routes>  
            </BrowserRouter>
          </StyledAppContainer>
        </NightModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;