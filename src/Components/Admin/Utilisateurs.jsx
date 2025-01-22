import React from 'react';
import Profilepic from '../../Images/Profilepic.svg';
import Profile from '../../Images/Profile2.svg';
import Dashboard from '../../Images/Dashboard.svg';
import Gestion from '../../Images/Gestion.svg';
import logo from '../../Images/GrosMarket2.svg';
import Rechercher from '../../Images/Rechercher.svg';
import Notif from '../../Images/Notificationn.svg';
import Trash from '../../Images/Trash.svg';
import Pen from '../../Images/Pen.svg';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, lastName: 'Benkhelifa', firstName: 'Bouchra', birthDate: '05/05/1990', location: 'Mila' },
  { id: 2, lastName: 'Benkhelifa', firstName: 'Bouchra', birthDate: '01/01/1985', location: 'Mila' },
  { id: 3, lastName: 'Benkhelifa', firstName: 'Bouchra', birthDate: '01/01/1985', location: 'Mila' },
  // Add more user objects as needed
];

function Utilisateurs() {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='bg-[#243645] w-[80%] md:w-[20%] p-4 flex flex-col items-center h-screen'>
        <div className='mb-6'>
          <img src={Profilepic} alt="Profile Pic" className='w-24 h-24 rounded-full' />
        </div>
        <div className='w-full'>
          <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
            <img src={Profile} alt="Profile" className='w-5 h-5 mr-2' />
            <p className='text-white text-sm'>Profile</p>
          </div>
          <Link to="/admin">
            <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
              <img src={Dashboard} alt="Dashboard" className='w-5 h-5 mr-2' />
              <p className='text-white text-sm'>Dashboard</p>
            </div>
          </Link>
          <Link to="/utilisateurs">
            <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
              <img src={Gestion} alt="Gestion" className='w-5 h-5 mr-2' />
              <p className='text-white text-sm'>Gestion des utilisateurs</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col w-full h-screen'>
        {/* Top Bar */}
        <div className='p-4 flex items-center justify-between'>
          <img src={logo} alt="Logo" className='w-30 h-auto' />
          <div className='flex items-center ml-4'>
            <div className='relative flex-grow'>
              <input
                type="text"
                placeholder="Rechercher..."
                className='py-1 pl-10 pr-12 rounded-sm bg-gray-100 border border-gray-300 shadow outline-none placeholder-gray-500'
              />
              <img src={Rechercher} alt="Search" className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5' />
            </div>
            <img src={Notif} alt="Notifications" className='w-6 h-6 ml-4' />
          </div>
        </div>

        {/* Content */}
        <div className='p-4 flex flex-col gap-4 overflow-y-auto'>
          <div className='flex gap-4 mb-4'>
            <button className='bg-[#FFC300] border shadow px-2 py-1 border-black-50 rounded text-white font-semibold text-xs'>
              Tous
            </button>
            <button className='bg-[#F4F4F4] border border-black-100 shadow px-2 py-1 rounded text-[#243645] font-semibold text-xs'>
              Filtrer par Nom
            </button>
          </div>

          {/* User Data */}
          <div className='flex flex-col gap-2'>
            {users.map(user => (
              <div key={user.id} className='flex items-center justify-between p-2 border border-gray-200 rounded'>
                <input type="checkbox" className='ml-2'/>
                <p className='text-xs font-semibold w-20 truncate'>{user.lastName}</p>
                <p className='text-xs w-20 truncate'>{user.firstName}</p>
                <p className='text-xs text-gray-600 w-24 truncate'>{user.birthDate}</p>
                <p className='text-xs w-24 truncate'>{user.location}</p>
                <div className='flex gap-5'>
                  <Link><img src={Pen} alt="Edit" className='w-4' /></Link>
                  <Link><img src={Trash} alt="Delete" className='w-4'/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilisateurs;
