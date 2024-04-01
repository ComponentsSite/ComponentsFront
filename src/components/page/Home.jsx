import React, { useState} from "react";
import { ThemeProvider, styled } from "styled-components";
import {CardList, NavBar} from '../organisms'
import { NightModeSwitch } from "../molecules";
import { NightModeProvider } from "../../contexts"
import { Provider } from "react-redux";
import { store } from "../../store";
import { BtnCustom, BtnCustom2, BtnCustom3, BtnCustom4 } from "../atoms";

// Style 



const StyleCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
`;

// Data

const cardData = [
  {
    component: <BtnCustom text="Label"></BtnCustom>,
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Anonyme",
    text: "1000€",
  },
  {
    component: <BtnCustom2 text="Label"></BtnCustom2>,
    url: "https://i.imgur.com/7D7I6dI.png",
    title: "Daisy",
    text: "7€",
  },
  {
    component: <BtnCustom3 text="Label"></BtnCustom3>,
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "John John",
    text: "45€",
  },
  {
    component: <BtnCustom4 text="Label"></BtnCustom4>,
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Daisy Bis",
    text: "12€",
  }
];


function Home() {

  return (
    <Provider store={store}>
          <NavBar title="Element Craft" text="profil">
          </NavBar>
            <StyleCardList>
              <CardList data={cardData}></CardList> 
            </StyleCardList>
    </Provider>
  );
}

export default Home;