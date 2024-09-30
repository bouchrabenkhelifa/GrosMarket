import React from "react";
import Landing from "../Components/Commercant/Landing";
import Categories from "../Components/Commercant/Categories";
import Produits from "../Components/Commercant/Produits";
import Offres from "../Components/Commercant/Offres";
import Navbar from "../Components/Commercant/NavBar";
import Footer from "../Components/Commercant/Footer";
const Acceuil = () => {
    return (  
        <div>
           <Navbar/>
           <Landing/>
           <Categories/>
           <Produits />
           <Offres />
           <Footer/>
        </div>
    );
}
 
export default Acceuil;