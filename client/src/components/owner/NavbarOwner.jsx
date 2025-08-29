import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDuolingo } from '@fortawesome/free-brands-svg-icons';


const NavbarOwner = () => {

    const {user} = useAppContext()

  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-400 border-b border-gray-600 relative transition-all'>
        <Link to='/'>
            <FontAwesomeIcon icon={faDuolingo} className='text-cyan-500 text-2xl' />&nbsp;&nbsp;&nbsp;<span className='text-2xl text-cyan-50'>DreamCarRent</span>
        </Link>
        <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner