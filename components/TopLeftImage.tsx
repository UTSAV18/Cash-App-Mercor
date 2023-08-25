import Image from "next/image"

const TopLeftImage = () => {
  return (
    <div className="absolute pl-24 top-14 left-20 translate-x-3/4 -translate-y-3/4 z-30">
      <Image
        src="/TopLeftImg.svg"
        alt="Top Left Corner SVG"
        layout="responsive"
        width={74}
        height={73.212}
      />
    </div>
  )
}

export default TopLeftImage