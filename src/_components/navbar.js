// Navbar.js

import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { MdPersonOutline } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from "./image"

const Navbar = () => {
  const [ isMenuOpen , setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
  }
  const closingWindow = () => {
      setIsMenuOpen(false)
  }


  return (
    <nav className='bg-red-500 p-6 m-1 rounded-t-md'>
    <div className='flex space-x-2 items-center justify-between md:hidden'>
          <div className='text-white font-semibold text-2xl'>
            SimuVerse
          </div>
          <div className='flex md:hidden space-x-2 items-center'>
            <button className=' text-white'>
              Log in
            </button>
            <IoMdMenu className='text-white size-7 hover:bg-red-600 rounded' onClick={toggleMenu} />
          </div>
    </div>
    {isMenuOpen && (
      <div className=' fixed top-0 left-0  w-full h-full flex flex-col justify-between p-6 bg-white '>
                <div className='flex justify-end '>
                  <IoClose className='size-6 text-red-400 hover:bg-red-700 rounded' onClick={closingWindow}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm '>Home</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Store</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Contact</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Seller</a>
                <a href='#' className='text-black font-semibold mb-4 hover:bg-red-500 px-2 rounded-sm'>Avatar</a>

                
              </div>
              <div className='flex flex-row justify-center'>
                  <div className='border border-gray-300 rounded-l-md p-2'>
                    <CiHeart size={30} />
                  </div>
                  <div className='border border-gray-300  p-2'>
                    <CiSearch size={30} />
                  </div>
                  <div className='border border-gray-300  p-2'>
                    <SlBag size={30} />
                  </div>
                  <div className='border border-gray-300  rounded-r-md p-2'>
                    <MdPersonOutline size={30} />
                  </div>
              </div>
              
        </div>
        )}

    <div className= ' hidden bg-white p-4 rounded-sm md:flex justify-between items-center'>

      {/* Logo/Title */}
      <div className='text-red-600 font-semibold text-2xl '>
        SimuVerse
      </div>

      {/* Desktop View: Menu Items  */}
      <div className='hidden md:flex md:space-x-5 text-black font-semibold'>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Home</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Store</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Contact</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Seller</a>
        <a className=' hover:bg-red-500 px-2 rounded-sm' href='#'>Avatar</a>
      </div>
      
      {/* Desktop View: Icons and Login/Signup */}
      <div className=' md:flex md:space-x-2 md:justify-between items-center'>
        <div className='flex flex-row'>
          <div className=' border border-gray-300 p-1 rounded-l-sm'>
            <CiHeart size={20} />
          </div>
          <div className=' border border-gray-300 p-1'>
            <CiSearch size={20} />
          </div>
          <div className=' border border-gray-300 p-1'>
           <SlBag size={20} />
          </div>
          <div className=' border border-gray-300 p-1 rounded-r-sm'>
           <MdPersonOutline size={20} />
          </div>
        </div>
        <div className='flex space-x-2 px-1 py-0.5 border border-gray-300  rounded-sm '>
          <div>SignUp</div>
          <span>/</span>
          <div>LogIn</div>
        </div>
      </div>
      
      
    </div>
    <div className='md:hidden'>
      <Image />
    
    </div>
    <div className='md:hidden'>
      <h1 className='text-white text-3xl '>Re imagining the way you shop introducing SIMUVERSE</h1>
      <h6 className='text-white mt-2'>Click on the explore button below to know more about SimuVerse.</h6>
    </div>

    <div className='flex justify-center mt-6 md:hidden'>
      <button className='bg-white px-10 py-1 rounded-sm font-medium'>Explore</button>
    </div>
  </nav>
  );
};

export default Navbar;
