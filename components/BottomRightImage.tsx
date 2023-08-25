'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Links from "./Links";

const BottomRightImage = () => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute bottom-20 right-28 -translate-x-3/4 -z-10">
      {showContent && (
        <div className="hidden md:block">
          <Image
            src="/BottomRightImg.svg"
            alt="Bottom Right Corner SVG"
            layout="responsive"
            width={200}
            height={260.904}
          />
          <p className="absolute bottom-16 -right-24 z-10 translate-y-3/4 font-['Mulish'] font-extralight text-[#B6B6B6] text-xs h-[130px] w-[380px] text-justify">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
          </p>
        </div>
      )}
      {showContent && <Links />}
    </div>
  );
};

export default BottomRightImage;
