import { Link, useNavigate } from "react-router-dom"
import deskBackgroundImage from "../../assets/desk-background.jpg"
import styled from "styled-components"
import internLogo from "../../assets/intern-capital-logo.svg"
import videoBackground from "../../assets/space.mp4"

const FlickerEffect = styled.div`
  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // -webkit-animation: flickerAnimation 10s infinite;
  // -moz-animation: flickerAnimation 10s infinite;
  // -o-animation: flickerAnimation 10s infinite;
  // animation: flickerAnimation 10s infinite;
`

export function Splash() {
  const navigate = useNavigate()

  const navigateToExternalLink = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center bg-black overflow-hidden'>
        <div className='max-w-max mx-auto h-screen flex place-items-center justify-center z-1'>
          <video
            className='absolute z-0 h-screen w-auto object-cover mx-auto max-w-none left-0 right-0'
            autoPlay
            loop
            muted
          >
            <source src={videoBackground} type='video/mp4' />
          </video>
          <main className='absolute flex z-1'>
            <div className='sm:ml-6 pr-12'>
              <img alt='logo' src={internLogo} className='h-48 w-48' />
            </div>
            <div className='text-4xl font-extrabold text-white sm:text-5xl justify-center flex flex-col pl-12 border-l'>
              <div className='mb-4'>Intern Capital</div>
              <div className='text-xl font-normal'>Coming Soon...</div>
            </div>
          </main>
          <div className='absolute z-1 w-full bottom-0'>
            <div className='text-white text-lg p-8'>Powered by Interns</div>
          </div>
        </div>
      </div>
    </>
  )
}
