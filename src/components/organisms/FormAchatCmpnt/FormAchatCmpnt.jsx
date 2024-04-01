import React, { useState } from "react";
import styled from "styled-components";
import { InputText, Btn } from "../../atoms";
import axios from "axios";
import {BtnCustom, BtnCustom2, BtnCustom3, BtnCustom4} from "../../atoms"
import { useNavigate } from "react-router-dom";


const StyledForm = styled.form`
  background : ${(props) => props.background ? props.background : props.theme.textNavbar};
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  flex-direction: column;
  display: flex;
  width: 300px;
`;
const StyledLabel = styled.label`
  font-weight: 500;
  color: ${(props) => props.background ? props.color : props.theme.tertiary};
  opacity: 0.7;
  font-size: 1.4rem;
  margin-top: 16px;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  text-align: start;
`;


const FormAchatCmpnt = ( data, ...props  ) => {

    const [prix, setPrix] = useState("");
    const [creator, setCreator] = useState("");
    const currentPath = window.location.pathname;
    const navigate = useNavigate();
 
  const handleChange = (e) => {
    /* e.preventDefault();
    axios.get(
      "http://127.0.0.1:8000/api/login_check", { username, password }, headers
    ).then((response) =>{
      
      navigate("/home", { replace: true });
    }).catch(error => {
      console.error("Erreur de connexion:", error);
    }); */

    console.log("Envoyer")
  };

  const handleSubmit = (e) => {
    alert("Félicitation, vous venez d'acheter le style du composant!");
    navigate('/home');
  };

  return (

    <StyledForm onSubmit={handleChange}>
     {(() => {
        switch (currentPath) {
          case 'buycomponent/BtnCustom2':
            return <BtnCustom2 text="label"></BtnCustom2>;
          case 'buycomponent/BtnCustom3':
            return <BtnCustom3 text="label"></BtnCustom3>;
            case 'buycomponent/BtnCustom4':
            return <BtnCustom4 text="label"></BtnCustom4>;
          default:
            return <BtnCustom text="label"></BtnCustom>;
        }
      })()}
       <StyledLabel>Créateur</StyledLabel>
       <InputText 
         id="creator"
         name="creator"
         value={creator}
         onChange={(e) => setCreator(e.target.value)}
       />
       <StyledLabel>Prix</StyledLabel>
       <InputText 
         id="prix"
         name="prix"
         value={prix}
         onChange={(e) => setPrix(e.target.value)}
       />
       <Btn text="Acheter" type="submit" onClick={handleSubmit} />
   </StyledForm>
  );
};

export default FormAchatCmpnt;