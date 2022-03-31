import { ChevronRightIcon } from "@heroicons/react/solid"
import { Nav } from "./Nav"
import deskBackground from "../../assets/desk-background.jpg"
import deskBackgroundBlack from "../../assets/desk-background-black.jpg"
import ScrollDown from "../ScrollDown"
import InternButton from "../Button"
import HeroLayers from "../utilities/HeroLayers"
import { useState } from "react"

const DISCORD_LINK = "https://discord.gg/Jbbf9D6h5E"

export function Hero() {
  const [layersToShow, setLayersToShow] = useState(0)

  setInterval(() => {
    const numLayers = Math.floor(Math.random() * 10)
    setLayersToShow(numLayers)
  }, 5000)

  return (
    <div className='hero w-full h-screen'>
      <div className='relative h-screen flex flex-col'>
        <div className='backgrounds'>
          <div
            className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10'
            style={{ backgroundImage: `url(${deskBackgroundBlack})` }}
          >
            <div className='max-w-max mx-auto h-min-400 flex place-items-center justify-center'></div>
          </div>
          <div
            className='animate-flickerMinor absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10'
            style={{ backgroundImage: `url(${deskBackground})` }}
          >
            <div className='max-w-max mx-auto h-min-400 flex place-items-center justify-center'></div>
          </div>
          {HeroLayers.map((layer, index) => {
            return layersToShow > index ? (
              <div
                key={"layer-" + index}
                className={`animate-flickerLayer${
                  index + 1
                } absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10`}
                style={{ backgroundImage: `url(${HeroLayers[index]})` }}
              >
                <div className='max-w-max mx-auto h-min-400 flex place-items-center justify-center'></div>
              </div>
            ) : null
          })}
        </div>
        <Nav />
        <main className='flex flex-col grow justify-center z-1'>
          <div className='mx-auto max-w-7xl pb-20'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left lg:flex lg:items-center'>
                <div>
                  <a
                    href={DISCORD_LINK}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                  >
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-purple-800 rounded-full'>
                      Calling all interns
                    </span>
                    <span className='ml-4 text-sm'>Join us on Discord</span>
                    <ChevronRightIcon className='ml-2 w-5 h-5 text-gray-500' aria-hidden='true' />
                  </a>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
                    <span className='text-purple-800 md:block text-5xl'>Welcome to</span>
                    <span className='md:block mb-2'>InterNFT</span>{" "}
                  </h1>
                  <p className='mt-3 text-sm text-gray-300 sm:mt-5 mb-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Intern Capital's innovative and transformative NFT collection, created by
                    interns, for interns.
                  </p>
                  <InternButton>LFG</InternButton>
                </div>
              </div>
              <div className='mt-16 sm:mt-24 lg:mt-0 lg:col-span-8'>
                <div className='sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
                  {/* <img src={purpleIntern} alt='Purple Intern' className='w-200' /> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className='absolute left-0 right-0 bottom-0 pb-10'>
          <ScrollDown />
        </div>
      </div>
    </div>
  )
}
