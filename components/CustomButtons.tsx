import { useEffect, useState } from "react";
import Image from "next/image";

const CustomButtons = () => {
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
    <div className={`absolute ${isMobileView ? "pl-11 -top-60 z-50" : "-bottom-7"} -left-16 z-50 flex space-x-3`}>
      <button className="w-[180px] h-[50px] flex items-center justify-center border border-white rounded font-extrabold bg-black">
        <div className="flex items-center">
          <Image
            src="/AppStoreIcon.svg"
            alt="App Store Icon"
            width={25}
            height={30}
          />
          <Image
            className="ml-2"
            src="/AppStoreText.svg"
            alt="App Store Text"
            width={25}
            height={30}
            layout="responsive"
          />
        </div>
      </button>

      <button className="w-[180px] h-[50px] flex items-center justify-center border border-white rounded bg-black">
        <div className="flex items-center">
          <Image
            src="/PlayStoreIcon.svg"
            alt="Play Store Icon"
            width={25}
            height={30}
          />
          <Image
            className="ml-2"
            src="/PlayStoreText.svg"
            alt="Play Store Text"
            width={25}
            height={30}
            layout="responsive"
          />
        </div>
      </button>
    </div>
  );
};

export default CustomButtons;
