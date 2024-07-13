import React, { useRef } from 'react';
import { FaPhone, FaDesktop, FaCamera, FaHeadphones, FaWatchmanMonitoring, FaGamepad, FaTv, FaCar, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Categories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const categories = [
    { icon: <FaDesktop className='w-8 h-8 mb-2 mx-auto' />, text: 'Electronique' },
    { icon: <FaCamera className='w-8 h-8 mb-2 mx-auto' />, text: 'Caméra' },
    { icon: <FaHeadphones className='w-8 h-8 mb-2 mx-auto' />, text: 'Écouteurs' },
    { icon: <FaPhone className='w-8 h-8 mb-2 mx-auto' />, text: 'Téléphone' },
    { icon: <FaGamepad className='w-8 h-8 mb-2 mx-auto' />, text: 'Jeux' },
    { icon: <FaWatchmanMonitoring className='w-8 h-8 mb-2 mx-auto' />, text: 'Montre' },
    { icon: <FaTv className='w-8 h-8 mb-2 mx-auto' />, text: 'TV' },
    { icon: <FaCar className='w-8 h-8 mb-2 mx-auto' />, text: 'Voiture' },
    { icon: <FaCamera className='w-8 h-8 mb-2 mx-auto' />, text: 'Caméra' },
    { icon: <FaHeadphones className='w-8 h-8 mb-2 mx-auto' />, text: 'Écouteurs' },
    { icon: <FaPhone className='w-8 h-8 mb-2 mx-auto' />, text: 'Téléphone' },
    { icon: <FaGamepad className='w-8 h-8 mb-2 mx-auto' />, text: 'Jeux' },
    { icon: <FaBook className='w-8 h-8 mb-2 mx-auto' />, text: 'Livres' },
  ];

  return (
    <div className='p-4'>
      <div className='w-[100%] mx-auto'>
        <h1 className='text-black pl-20 font-semibold text-2xl text-left'>Filtrer Par Catégorie</h1>
        <div className="relative pl-3 pt-5">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 shadow-lg"
          >
            <FaChevronLeft className='w-4 h-4' />
          </button>
          <div className="overflow-hidden relative px-4 mx-16">
            <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar space-x-4 space-y-">
              {categories.map((category, index) => (
                <div key={index} className="flex-shrink-0 w-40">
                  <a
                    href="#"
                    className="block relative bg-white rounded-lg shadow-md p-5 border border-gray-300 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC300]"
                    style={{
                      transition: 'border-color 0.3s ease-in-out',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Ajout d'une légère ombre pour améliorer la visibilité
                      borderTop: '3px solid transparent', // Ajout du bord supérieur transparent
                    }}
                  >
                    {category.icon}
                    <span className="block mt-2">{category.text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 shadow-lg z-10"
          >
            <FaChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
