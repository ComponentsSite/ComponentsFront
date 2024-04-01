import React, { useState } from "react";
import styled from "styled-components";
import { InputText, Btn } from "../../atoms";
import axios from "axios";


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
  margin-top: 0;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  text-align: start;
`;


const FormAchatCmpnt = ( data, ...props  ) => {

    const [prix, setPrix] = useState("");
    const [creator, setCreator] = useState("");
 
  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    alert("Félicitation, vous venez d'acheter le style du composant!");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
       <Btn text="Acheter" type="submit" onClick={handleChange} />
   </StyledForm>
  );
};

export default FormAchatCmpnt;