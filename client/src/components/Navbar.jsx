import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

   

    const {navigate, token} = useAppContext()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl-mx-32'>
        <img onClick={ ()=> navigate ('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' />
        <button onClick={ ()=> navigate ('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-700 text-white px-10 py-2.5'>
          {token ? 'Dashboard' : 'Login' }
        </button>
    </div>
  )
}

export default Navbar