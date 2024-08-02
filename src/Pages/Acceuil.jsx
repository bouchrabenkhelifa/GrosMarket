import React from "react";
import Landing from "../Components/Commercant/Landing";
import Categories from "../Components/Commercant/Categories";
import Produits from "../Components/Commercant/Produits";
import Offres from "../Components/Commercant/Offres";
const Acceuil = () => {
    return (  
        <div>
           <Landing/>
           <Categories/>
           <Produits />
           <Offres />
        </div>
    );
}
 
export default Acceuil;