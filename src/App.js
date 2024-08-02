import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Components/Commercant/Details';
import Favoris from './Components/Commercant/Favoris';
import NavBar from './Components/Commercant/NavBar';
import Footer from './Components/Commercant/Footer';
import Login from './Components/Commercant/Login';
import Services from './Components/Commercant/Services';
import Acceuil from './Pages/Acceuil';
import Formulaire from './Components/Commercant/Formulaire';
import Fournissseur from './Pages/Fournissseur';
import Produit from './Pages/pro'
import Panier from './Components/Commercant/Panier';
import Admin from './Components/Admin/Admin';
import Utilisateurs from './Components/Admin/Utilisateurs';
function App() {
  return (
   
    <Router>
   <NavBar/>
   
    <Routes>    
    <Route path="/utilisateurs" element={<Utilisateurs/>} />
        <Route path="/panier" element={<Panier/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/fournisseur" element={<Fournissseur />} />
        <Route path="/ajouter" element={<Produit />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details/:id" element={<Details  />} />
        <Route path="/se connecter" element={<Login />} />
        <Route path="/services/form" element={<Formulaire />} />
        <Route path="/favoris" element={<Favoris  />} />
    </Routes>
  
    </Router>

  );
}

export default App;
