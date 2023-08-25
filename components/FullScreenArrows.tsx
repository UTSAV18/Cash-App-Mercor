'use client'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";



const FullScreenArrows = () => {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div>
        <Image className={`${isMobileView ? "pl-8 pb-28 h-[250px] w-[350px]" : ""} z-[-10]`} src="/Arrows.svg" alt='Arrows' layout='fill' objectFit='cover' />
    </div>
  )
}

export default FullScreenArrows