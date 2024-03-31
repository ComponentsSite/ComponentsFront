import React, { useState} from "react";
import { styled } from "styled-components";
import {
  InputText,
  Clock,
  Card,
  Paragraph,
  Btn,
} from "../atoms";
import {
  FaCarrot,
  FaLemon,
  FaPepperHot,
} from "react-icons/fa";
import {Menu, Form, NavBar, TodoList, TodoListCopy} from '../organisms'
import { Provider } from "react-redux";
import { store } from "../../store";
import PlayList from "../organisms/PlayList/PlayList.jsx"


// Style 
const StyledCard = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
// Data

const menuData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Chili",
    slug: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    text: "Carrot",
    slug: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    text: "Lemon",
    slug: "lemon",
  },
];

const formData = [
  {
    icon: <FaPepperHot></FaPepperHot>,
    text: "Hello",
    data: "chili",
  },
  {
    icon: <FaCarrot></FaCarrot>,
    data: "carrot",
  },
  {
    icon: <FaLemon></FaLemon>,
    data: "lemon",
  },
];

function Profil() {
  const [page, setPage] = useState("chili");

  const renderPage = () => {
    switch (page) {
      case "carrot":
        return (
          <div>
            <Clock />
          </div>
        );
      case "lemon":
        return <PlayList>Lemon</PlayList>;
      default:
      case "chili":
        return <div>Chilly</div>;
    }
  };
  const handler = (pageName) => {
    setPage(pageName);
  };

  return (
    <Provider store={store}>
          <NavBar title="Element Craft" text="profil">
          </NavBar>
            <Menu data={menuData} handler={handler}>
              
              </Menu>
              <TodoList></TodoList>
              <TodoListCopy></TodoListCopy>
              <StyledCard>
           
                <Card />
                <Card></Card>
              </StyledCard>
              {renderPage()}
              
              <Btn></Btn>
              <Paragraph></Paragraph>
    </Provider>
  );
}

export default Profil;