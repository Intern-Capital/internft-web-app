import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Popover, Transition } from "@headlessui/react"

import { Fragment } from "react"
import { Wallet } from "../utilities/Wallet"
import logo from "../../assets/intern-capital-logo.svg"
import AnimatedLogo from "../AnimatedLogo"
import Fade from "react-reveal/Fade"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "Mint", href: "#mint" },
]

export function Nav() {
  return (
    <Popover>
      <Fade down>
        <nav
          className='relative max-w-7xl  -mt-4 mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='/' className='-ml-4'>
                <span className='sr-only'>Logo</span>
                <AnimatedLogo />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='hidden space-x-10 md:flex md:ml-10'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='font-medium text-white hover:text-gray-300'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className='hidden md:flex'>
            <Wallet />
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img className='h-8 w-auto' src={logo} alt='' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <Wallet />
            </div>
          </Popover.Panel>
        </Transition>
      </Fade>
    </Popover>
  )
}
