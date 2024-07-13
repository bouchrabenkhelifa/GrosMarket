import React, { useState } from 'react';
import product1Image from '../Images/Produit1.svg';
import product2Image from '../Images/Produit2.svg';
import product3Image from '../Images/Produit3.svg';
import product4Image from '../Images/Produit4.svg';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Produits = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        { id: 1, name: 'Veste ', price: 10955, image: product1Image },
        { id: 2, name: 'PC', price: 15555, image: product2Image },
        { id: 3, name: 'CANON EOS DSLR Caméra', price: 20000, image: product3Image },
        { id: 4, name: 'Curology Product Set ', price: 3000, image: product4Image },
        { id: 5, name: 'Vêtements', price: 15555, image: product1Image },
        { id: 6, name: 'Product 6', price: 20000, image: product2Image },
        { id: 7, name: 'Product 7', price: 20000, image: product3Image },
        { id: 8, name: 'Product 8', price: 20000, image: product4Image },
    ];

    return (
        <div className="p-8">
            <h2 className="text-black  mb-6 font-bold text-2xl text-center">Nos Produits</h2>
            <div className="w-[90%] mx-auto">
                <h2 className="text-black mb-6 font-semibold text-2xl">Explorez Nos Produits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {products.map(product => (
                        <a
                            key={product.id}
                            href="/details"
                            className="block relative mb-4"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="bg-[#243645] bg-opacity-5 shadow-sm rounded-sm overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`product-image h-48 object-cover mx-auto my-4 ${hoveredProduct === product.id ? 'h-38 py-8' : 'h-48 py-4'}`}
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
                            <div className="p-2 bg-white shadow-md">
                                <h5 className="font-medium text-[#243645] text-opacity-90 text-100 mb-1">{product.name}</h5>
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
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Produits;
