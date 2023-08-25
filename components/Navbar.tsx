'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleDropdown = () => {
    if (windowWidth <= 1080) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showNavLinks = windowWidth > 1080;

  return (
    <nav className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center ml-2 md:ml-[60px]">
        <Image src="/logo.svg" width={30} height={40} alt="logo" />
      </div>

      {showNavLinks && (
        <div className="hidden md:flex space-x-5">
          <Image src="/SignIn.svg" alt="SignIn" width={60} height={50} layout="responsive" />
          <Image src="/Legal.svg" alt="Legal" width={60} height={50} layout="responsive" />
          <Image src="/Licenses.svg" alt="Licenses" width={60} height={50} layout="responsive" />
          <Image src="/Security.svg" alt="Security" width={60} height={50} layout="responsive" />
          <Image src="/Careers.svg" alt="Careers" width={60} height={50} layout="responsive" />
          <Image src="/Press.svg" alt="Press" width={60} height={50} layout="responsive" />
          <Image src="/Support.svg" alt="Support" width={60} height={50} layout="responsive" />
          <Image src="/Status.svg" alt="Status" width={60} height={50} layout="responsive" />
          <Image src="/Codeblog.svg" alt="Codeblog" width={100} height={100} layout="responsive" />
        </div>
      )}

      <div className="flex bg-transparent items-center md:mr-[60px]">
        {/* Keep EyeButton.svg always visible */}
        <button onClick={toggleDropdown}>
          <Image
            src="/EyeButton.svg"
            width={64}
            height={36}
            alt="EyeButton"
            className="ml-auto md:ml-2 cursor-pointer"
          />
        </button>
        
        
        {/* Dropdown menu */}
        {isDropdownOpen && windowWidth <= 1080 && (
          <div className="absolute z-20 p-2 mt-1 shadow-md rounded top-[64px] sm:right-0 md:top-[60px] md:right-14">
            <div className="md:flex flex-col space-y-1">
            <Image src="/SignIn.svg" alt="SignIn" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Legal.svg" alt="Legal" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Licenses.svg" alt="Licenses" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Security.svg" alt="Security" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Careers.svg" alt="Careers" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Press.svg" alt="Press" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Support.svg" alt="Support" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Status.svg" alt="Status" width={60} height={50} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            <Image src="/Codeblog.svg" alt="Codeblog" width={100} height={100} layout="responsive" className="w-[60px] h-[50px] object-scale-down p-1"  />
            </div>
          </div>
        )}
      </div>

      
    </nav>
  );
}

export default Navbar;
