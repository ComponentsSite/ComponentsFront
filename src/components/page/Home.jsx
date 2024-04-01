import React from "react";
import { styled } from "styled-components";
import {CardList, NavBar} from '../organisms'
import { Provider } from "react-redux";
import { store } from "../../store";
import { BtnCustom, BtnCustom2, BtnCustom3, BtnCustom4 } from "../atoms";

const StyleCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
`;

const cardData = [
  {
    component: <BtnCustom text="Label"></BtnCustom>,
    name: "BtnCustom",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Anonyme",
    text: "1000€",
  },
  {
    component: <BtnCustom2 text="Label"></BtnCustom2>,
    name: "BtnCustom2",
    url: "https://i.imgur.com/7D7I6dI.png",
    title: "Daisy",
    text: "7€",
  },
  {
    component: <BtnCustom3 text="Label"></BtnCustom3>,
    name: "BtnCustom3",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "John John",
    text: "45€",
  },
  {
    component: <BtnCustom4 text="Label"></BtnCustom4>,
    name: "BtnCustom4",
    url: "https://i.imgur.com/sjLMNDM.png",
    title: "Daisy Bis",
    text: "12€",
  }
];


function Home() {

  return (
    <Provider store={store}>
      <NavBar title="Element Craft">
      </NavBar>
      <StyleCardList>
        <CardList data={cardData}></CardList> 
      </StyleCardList>
    </Provider>
  );
}

export default Home;