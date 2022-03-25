import circle from "../../assets/bg-circle-2.svg"
import styled from "styled-components"
import assetBackground from "../../assets/asset-bg.png"

// https://dev.to/stackfindover/creative-aurora-ui-gradient-animation-ui-trend-2021-251h
const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: visible;
  }

  .base {
    position: absolute;
    filter: blur(100px);
    opacity: 0.8;
  }

  .one {
    border-radius: 100%;
    width: 800px;
    height: 600px;
    background-color: #373372;
    opacity: 0.8;
    right: -50px;
    top: -100px;
    animation: fly 12s linear infinite;
    transform: rotate(0) translate(80px) rotate(0);
  }

  .two {
    width: 500px;
    height: 800px;
    background-color: #7c336c;
    bottom: 60px;
    left: -80px;
  }

  .three {
    border-radius: 100%;
    width: 450px;
    height: 450px;
    bottom: 180px;
    right: -100px;
    animation: flyPlus 8s linear infinite;
    transform: rotate(0) translate(100px) rotate(0);
  }
`

interface Props {
  showBackgroundImage?: boolean
}

export function Background({ showBackgroundImage }: Props) {
  return (
    <GradientBackground>
      <div
        className='absolute left-0 right-0 top-0 bottom-0 bg-darkpurple bg-[500px_578px]'
        style={{ backgroundImage: showBackgroundImage && `url(${assetBackground})` }}
      ></div>
      <div className='absolute wrapper'>
        {/* <div className='base one'></div>
        <div className='base two'></div>
        <div className='base three  bg-purple-900'></div> */}
        <img
          className='base four blur-4xl animate-flyPlus ml-40 mt-20 w-[850px] h-[850px]'
          src={circle}
          alt='circle'
        />
      </div>
    </GradientBackground>
  )
}
