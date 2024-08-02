import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai'; // Import heart icon
import { FaStar } from 'react-icons/fa'; // Import star icon
import { Link } from 'react-router-dom'; // Import Link

function Produits() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-black mb-6 font-bold text-2xl text-center">Nos Produits</h2>
      <div className="w-[90%] mx-auto">
        <h2 className="text-black mb-6 font-semibold text-2xl">Explorez Nos Produits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.slice(4).map(product => (
            <Link
              key={product.id}
              to={`/details/${product.id}`} // Passe l'ID dans l'URL
              state={{ product }} // Passe l'objet produit via state
              className="block relative mb-4"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-white bg-opacity-5 shadow rounded-sm overflow-hidden relative h-64">
                <img
                  src={product.images[1]}
                  alt={product.title}
                  className={`product-image object-cover w-auto h-auto mx-auto transition-all duration-300 ${hoveredProduct === product.id ? 'h-32' : 'h-48 '}`}
                />
                <div className={`absolute bottom-0 left-0 w-full text-center ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                  <button className="bg-[#243645] text-white px-2 py-1 rounded-bl-sm rounded-br-sm transition-colors duration-300 w-full">
                    Ajouter au panier
                  </button>
                </div>
                <div className="absolute top-0 right-1 mt-2 mr-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <AiOutlineHeart className="text-black" />
                </div>
              </div>
              <div className="p-2 bg-white shadow-md h-28">
                <h5 className="font-medium text-[#243645] text-opacity-90 text-100 mb-1">{product.title}</h5>
                <div className="flex items-center justify-between mr-[20%]">
                  <p className="font-medium text-[#243645] text-opacity-80">{product.price} DA</p>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-[#FFC300]" />
                    <FaStar className="text-[#FFC300]" />
                    <FaStar className="text-[#FFC300]" />
                    <FaStar className="text-[#FFC300]" />
                    <FaStar className="text-[#FFC300]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produits;
