import React, { useState } from "react";

import styled from "styled-components";
import { InputText, Btn } from "../../atoms";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const StyledForm = styled.form`
  background : ${(props) => props.background ? props.background : props.theme.textNavbar};
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  position: relative;
  flex-direction: column;
  display: flex;
`;
const StyledLabel = styled.label`
  font-weight: 500;
  color: ${(props) => props.background ? props.color : props.theme.secondary};
  opacity: 0.7;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;


const FormConnexion = (...props ) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_access_token_here',
    'Access-Control-Allow-Origin': '*',
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(
        "http://127.0.0.1:8000/api/login_check", { username, password }, headers
      ).then((response) =>{
        
        navigate("/home", { replace: true });
      }).catch(error => {
        console.error("Erreur de connexion:", error);
      });
    };


  return (
    <StyledForm onSubmit={handleSubmit}>
     {error && <div className="error">{error}</div>}
        <StyledLabel htmlFor="username">Pseudo :</StyledLabel>
        <InputText 
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <StyledLabel  htmlFor="pwd">Mot de passe :</StyledLabel>
        <InputText 
          id="pwd"
          name="pwd"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Btn text="Se connecter" type="submit" />
    </StyledForm>
  );
};

export default FormConnexion;