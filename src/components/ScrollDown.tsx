import Lottie from "react-lottie-player"
import lottieJson from "../assets/lottie/scrolldown.json"

const ScrollDown = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 50, height: 50, margin: "auto" }}
    />
  )
}
export default ScrollDown
