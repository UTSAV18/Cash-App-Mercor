'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const MiddleImages = () => {
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
    <>
      <div className={`absolute ${isMobileView ? "pt-28 pl-28 right-14 h-[250px] w-[350px]" : ""} top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <Image
          src="/cash.svg"
          alt="Cash Image"
          layout="responsive"
          width={711}
          height={308.875}
          className="max-w-full"
        />
      </div>
      <div className={`absolute ${isMobileView ? "pl-40 right-14 h-[350px] w-[350px]" : ""} top-11/20 left-1/2 transform -translate-x-1/2 -translate-y-7`}>
        <Image
          src="/phone.svg"
          alt="Phone Image"
          layout="responsive"
          width={378}
          height={453.083}
          className="max-w-full"
        />
      </div>
      <div className={`absolute ${isMobileView ? "pl-36 right-14 h-[250px] w-[350px]" : ""} top-21/40 left-1/2 transform -translate-x-1/2 translate-y-8 md:translate-y-7 sm:translate-y-16`}>
        <Image
          src="/app.svg"
          alt="App Image"
          layout="responsive"
          width={711}
          height={308.875}
          className="max-w-full"
        />
      </div>

      <style jsx>
        {`
          @media (max-width: 768px) {
            .max-w-full {
              max-width: 100%;
            }

            .sm:translate-y-16 {
              transform:translateX(-50%) translateY(16rem);
            }
          }

          @media (min-width: 1080px) {
            .md:translate-y-7 {
              transform: translateX(-50%) translateY(7rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default MiddleImages;
