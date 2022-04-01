/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, MailIcon } from "@heroicons/react/outline"
import { Background } from "./Background"
import internSafeClosed from "../../assets/safe/safe-intern-closed.png"
import internSafeOpen from "../../assets/safe/safe-intern-open.png"
import { Fragment, useCallback, useState } from "react"
import Fade from "react-reveal/Fade"

export function Roadmap() {
  const [safeImage, setSafeImage] = useState(internSafeClosed)

  const onMouseEnter = useCallback(() => {
    setSafeImage(internSafeOpen)
  }, [])
  const onMouseLeave = useCallback(() => {
    setSafeImage(internSafeClosed)
  }, [])

  return (
    <div id='roadmap' className='roadmap overflow-hidden relative py-48 dark text-white'>
      <Background showBackgroundImage={true} />
      <div className='max-w-7xl m-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-start'>
        <div className='lg:col-start-2 relative'>
          <Fade right>
            {" "}
            <dl className='space-y-10 mb-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute justify-center text-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                    <span className='font-extrabold -pt-1 h-6 w-6 text-lg' aria-hidden='true'>
                      1
                    </span>
                  </div>
                  <h1 className='ml-16 text-2xl mb-6 pt-3 leading-6 font-black tracking-wide text-purple-400 uppercase'>
                    Phase 1 - InterNFT Launch
                  </h1>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>
                  InternNFT Launch with 6,942 available for mint and 69.42 UST per NFT
                </dd>
              </div>
            </dl>{" "}
          </Fade>
          <Fade right>
            {" "}
            <dl className='space-y-10 mb-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute justify-center text-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                    <span className='font-extrabold -pt-1 h-6 w-6 text-lg' aria-hidden='true'>
                      2
                    </span>
                  </div>
                  <h1 className='ml-16 text-2xl mb-6 pt-3  leading-6 font-black tracking-wide text-purple-400  uppercase'>
                    Phase 2 - Staking Vaults
                  </h1>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>
                  Vaults provide intrinsic XP for interns while also providing in-game currency
                  accumulation for future shop feature to accumulate items and rewards
                </dd>
              </div>
            </dl>{" "}
          </Fade>
          <Fade right>
            {" "}
            <dl className='space-y-10 mb-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute justify-center text-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                    <span className='font-extrabold -pt-1 h-6 w-6 text-lg' aria-hidden='true'>
                      3
                    </span>
                  </div>
                  <h1 className='ml-16 text-2xl mb-6 pt-3 leading-6  font-black tracking-wide text-purple-400 uppercase'>
                    Phase 3 - Item Shop Launch
                  </h1>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>
                  Weekly items available to purchase based on progress of the InternNFT
                </dd>
              </div>
            </dl>
          </Fade>
          <Fade right>
            <dl className='space-y-10 mb-10'>
              <div className='relative'>
                <dt>
                  <div className='absolute justify-center text-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                    <span className='font-extrabold -pt-1 h-6 w-6 text-lg' aria-hidden='true'>
                      4
                    </span>
                  </div>
                  <h1 className='ml-16 text-2xl mb-6 pt-3  leading-6 font-black tracking-wide text-purple-400  uppercase'>
                    Phase 4 - Evolving of InterNFT
                  </h1>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>
                  InterNFTs serve as an entry ticket to all new projects on Intern Capital and
                  provide additional utility in the ecosystem
                </dd>
              </div>
            </dl>
          </Fade>
        </div>
        <div className='mt-10 pr-5 relative lg:mt-0 lg:col-start-1'>
          <h2
            id='about-heading'
            className='text-base text-purple-500  font-semibold tracking-wide uppercase mb-2'
          >
            THE BEGINNING
          </h2>
          <h3 className='text-2xl font-extrabold text-white sm:text-3xl'>Roadmap</h3>
          <p className='mt-3 text-lg text-gray-200 mb-20'>
            InterNFTs are an artistic work that have been built for interns by interns to put the{" "}
            <i>ser</i> in serve. Intern Capital has designed the project with intention that it'll
            become a symbol within the entity itself, and grow in value with the community.
          </p>
          <img
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className='w-64 -ml-9'
            src={safeImage}
            alt='intern-vault'
          />
        </div>
      </div>
    </div>
  )
}
