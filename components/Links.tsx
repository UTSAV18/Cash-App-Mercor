import Image from "next/image"

const Links = () => {
  return (
    <div className="absolute bottom-11 left-[450px] flex space-x-2 gap-3">
        <Image
          src="/Twitch.svg"
          alt="SVG 1"
          width={40}
          height={40}
        />
        <Image
          src="/Twitter.svg"
          alt="SVG 2"
          width={40}
          height={40}
        />
        <Image
          src="/Instagram.svg"
          alt="SVG 3"
          width={40}
          height={40}
        />
      </div>
  )
}

export default Links