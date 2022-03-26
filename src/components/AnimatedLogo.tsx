import Lottie from "react-lottie-player"
import lottieJson from "../assets/lottie/animated-logo.json"

const AnimatedLogo = () => {
  return <Lottie loop animationData={lottieJson} play style={{ width: 150, height: 150 }} />
}
export default AnimatedLogo
