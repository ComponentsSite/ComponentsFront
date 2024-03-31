import React, { useState} from "react";
import { ThemeProvider, styled } from "styled-components";
import {CardList, NavBar} from '../organisms'
import { NightModeSwitch } from "../molecules";
import { NightModeProvider } from "../../contexts"
import { Provider } from "react-redux";
import { store } from "../../store";
import { Btn, BtnCustom } from "../atoms";

// Style 



const StyleCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
`;

// Data

const cardData = [
  {
    urlMain: "https://i.imgur.com/oYiTqum.jpg",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Anonyme",
    text: "1000€",
  },
  {
    urlMain: "https://i.imgur.com/2DhmtJ4.jpg",
    url: "https://i.imgur.com/7D7I6dI.png",
    title: "Daisy",
    text: "7€",
  },
  {
    urlMain: "https://i.imgur.com/oYiTqum.jpg",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "John John",
    text: "45€",
  },
  {
    component: <BtnCustom text="Label"></BtnCustom>,
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