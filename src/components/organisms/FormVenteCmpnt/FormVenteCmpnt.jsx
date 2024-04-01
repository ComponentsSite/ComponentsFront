import React, { useState } from "react";
import styled from "styled-components";
import { InputText, Btn } from "../../atoms";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const StyledForm = styled.form`
  background : ${(props) => props.background ? props.background : props.theme.textNavbar};
  padding: 3em;
  height: fit-content;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  flex-direction: column;
  display: flex;
  width: 300px;
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


const FormVenteCmpnt = ( data, ...props  ) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [prix, setPrix] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
      /* e.preventDefault();
      axios.post(
        "http://127.0.0.1:8000//api/component",{name,type,prix,code}
      ).then((response) =>{
        navigate('/home')
      }).catch(error => {
        console.error("Erreur de connexion:", error);
      }); */
      alert("Votre composant est en vente");
      navigate('/home');
    };


  return (
    <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Nom du composant :</StyledLabel>
        <InputText 
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledLabel>Type de composant :</StyledLabel>
        <InputText 
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <StyledLabel>Prix (en €) : </StyledLabel>
        <InputText 
          id="prix"
          name="prix"
          type="number"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
        />
        <StyledLabel>Code css :</StyledLabel>
        <InputText 
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <Btn text="Vendre" type="submit" />
    </StyledForm>
  );
};

export default FormVenteCmpnt;