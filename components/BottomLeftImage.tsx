'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import CustomButtons from "./CustomButtons";

const BottomLeftImage = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute pl-9 bottom-0 left-20 translate-x-3/4 -translate-y-3/4 z-10">
      {showImage && (
        <Image
          src="/BottomLeftImg.svg"
          alt="Bottom Left Corner SVG"
          layout="responsive"
          width={188}
          height={176.478}
        />
      )}
      <div>
        <CustomButtons />
      </div>
    </div>
  );
};

export default BottomLeftImage;
