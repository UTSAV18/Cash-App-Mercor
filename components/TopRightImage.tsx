'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const TopRightImage = () => {
  const [shouldShowImage, setShouldShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setShouldShowImage(false);
      } else {
        setShouldShowImage(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return shouldShowImage ? (
    <div className="absolute pt-44 top-25 right-10 transform -translate-x-3/4 -translate-y-3/4">
      <Image
        src="/TopRightImg.svg"
        alt="Top Right Corner SVG"
        layout="responsive"
        width={200}
        height={260.904}
      />
    </div>
  ) : null;
};

export default TopRightImage;
