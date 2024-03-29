import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profil,Connexion } from "./components/page";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profil" element={<Profil/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;