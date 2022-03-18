/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Popover, Transition } from "@headlessui/react"

import { ChevronRightIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { Nav } from "./Nav"

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export function Hero() {
  return (
    <div className='dark bg-slate-800 relative overflow-hidden'>
      <div className='hidden sm:block sm:absolute sm:inset-0' aria-hidden='true'>
        <svg
          className='absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
          width={364}
          height={384}
          viewBox='0 0 364 384'
          fill='none'
        >
          <defs>
            <pattern
              id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect x={0} y={0} width={4} height={4} fill='currentColor' />
            </pattern>
          </defs>
          <rect width={364} height={384} fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)' />
        </svg>
      </div>
      <div className='relative pt-8 pb-16 sm:pb-24'>
        <Nav />
        <main className='mt-32 mb-24 sm:mt-24 border border-green-500'>
          <div className='mx-auto max-w-7xl'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
                <div>
                  <a
                    href='https://discord.gg/Jbbf9D6h5E'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                  >
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                      Calling all interns
                    </span>
                    <span className='ml-4 text-sm'>Join us on Discord</span>
                    <ChevronRightIcon className='ml-2 w-5 h-5 text-gray-500' aria-hidden='true' />
                  </a>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
                    <span className='text-indigo-400 md:block text-5xl'>Welcome to</span>
                    <span className='md:block mb-2'>InterNFT</span>{" "}
                  </h1>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Intern Capital’s innovative NFT collection, created by interns, for interns.
                  </p>
                  <p className='mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10'>
                    With Support From
                  </p>
                  <div className='mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0'>
                    <div className='flex flex-wrap items-start justify-between'>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                          alt='Tuple'
                        />
                      </div>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                          alt='Workcation'
                        />
                      </div>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                          alt='StaticKit'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-16 sm:mt-24 lg:mt-0 lg:col-span-6'>
                <div className='bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
