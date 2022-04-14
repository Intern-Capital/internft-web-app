import { ChevronRightIcon } from '@heroicons/react/solid'
import { Nav } from './Nav'
import deskBackground from '../../assets/desk-background.jpg'
import deskBackgroundBlack from '../../assets/desk-background-black.jpg'
import ScrollDown from '../ScrollDown'
import InternButton from '../Button'
import HeroLayers from '../utilities/HeroLayers'
import { useState, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import Fade from 'react-reveal/Fade'

const DISCORD_LINK = 'https://discord.gg/Jbbf9D6h5E'

export function Hero() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 9000)
    return () => clearInterval(interval)
  }, [counter])

  const onMouseEnter = () => {
    document.getElementById('hover-target').style.display = 'block'
  }
  const onMouseLeave = () => {
    document.getElementById('hover-target').style.display = 'none'
  }

  return (
    <div className="hero w-full h-screen">
      <div className="relative h-screen flex flex-col">
        <div className="backgrounds">
          <div
            id="hover-target"
            style={{ display: 'none' }}
            className="bg-black absolute opacity-90 top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10"
          >
            <div className="max-w-max mx-auto h-min-400 flex place-items-center justify-center"></div>
          </div>
          <div className="animate-flickerMinor bg-black absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10">
            <div className="max-w-max mx-auto h-min-400 flex place-items-center justify-center"></div>
          </div>
          <div
            className=" absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-30"
            style={{ backgroundImage: `url(${deskBackground})` }}
          >
            <div className="max-w-max mx-auto h-min-400 flex place-items-center justify-center"></div>
          </div>
          <Scene key={'heroscene'} duration={300} offset={300} pin>
            <Tween
              staggerFrom={{
                opacity: 0,
                cycle: {
                  rotationX: [-90, 90],
                  transformOrigin: ['50% top -100', '50% bottom 100'],
                },
              }}
              stagger={0.1}
              ease="Strong.easeOut"
            >
              {HeroLayers.map((layer, index) => {
                return (
                  <div
                    key={'layer-' + index}
                    className={
                      (counter > index ? ` opacity-100` : `  `) +
                      `  absolute top-0 w-full h-full bg-cover bg-no-repeat bg-center -z-20`
                    }
                    style={{ backgroundImage: `url(${HeroLayers[index]})` }}
                  >
                    <div className="max-w-max mx-auto h-min-400 flex place-items-center justify-center"></div>
                  </div>
                )
              })}
            </Tween>
          </Scene>
        </div>
        <Nav />
        <main className="flex flex-col grow justify-center -z-1">
          <div className="mx-auto max-w-7xl pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-4 lg:text-left lg:flex lg:items-center bg-black/80">
                <Fade left>
                  <div className="py-5">
                    <a
                      href={DISCORD_LINK}
                      target="_blank"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white whitespace-nowrap text-xs font-semibold leading-5 uppercase tracking-wide bg-purple-800 rounded-full">
                        Calling all interns
                      </span>
                      <span className="ml-4 text-sm  whitespace-nowrap">
                        Join us on Discord
                      </span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="text-purple-800 md:block text-5xl">
                        Welcome to
                      </span>
                      <span className="md:block mb-2 sm:block text-5xl">
                        &nbsp;InterNFT
                      </span>{' '}
                    </h1>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-5 mb-5 sm:text-xl lg:text-lg xl:text-xl">
                      Intern Capital's innovative and transformative NFT
                      collection, created by interns, for interns.
                    </p>
                    <InternButton
                      onClick={() => {
                        window.open(
                          'https://www.oneplanetnft.io/launchpad/randombox/62543b7e4aaded78ff674d6e',
                          '_blank'
                        )
                      }}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      BUY NOW
                    </InternButton>
                  </div>
                </Fade>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-8">
                <div className="sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  {/* <img src={purpleIntern} alt='Purple Intern' className='w-200' /> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        <div id="scrolldown" className="absolute left-0 right-0 bottom-0 pb-10">
          <ScrollDown />
        </div>
      </div>
    </div>
  )
}
