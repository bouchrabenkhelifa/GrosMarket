import NavBar from './Components/NavBar';
import './index.css';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Landing from './Components/Landing';
import Produits from './Components/Produits'


function App() {
  return (
    <div className="App">
       <NavBar/> 
       <Landing/> 
       <Categories/>
       <Produits/> 
       <Footer/> 
     
    </div>
  );
}

export default App;
