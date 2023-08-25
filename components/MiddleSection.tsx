import BottomLeftImage from "./BottomLeftImage"
import BottomRightImage from "./BottomRightImage"
import MiddleImages from "./MiddleImages"
import TopLeftImage from "./TopLeftImage"
import TopRightImage from "./TopRightImage"


const MiddleSection = () => {
  return (
    <div className="flex items-center justify-center h-screen relative right-20">
        <TopRightImage />
        <TopLeftImage />
        <MiddleImages />
        <BottomRightImage />
        <BottomLeftImage />
    </div>
  )
}

export default MiddleSection