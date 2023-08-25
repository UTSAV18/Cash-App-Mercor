import Image from "next/image";

const DownArrow = () => {
  return (
    <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
      <Image
        src="/DownArrow.svg" 
        alt="Bottom Icon"
        width={18}
        height={30}
      />
    </div>
  )
}

export default DownArrow