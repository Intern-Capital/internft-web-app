import { AnnotationIcon, LightningBoltIcon } from "@heroicons/react/outline"
import ReactPlayer from "react-player/lazy"
import { Background } from "./Background"
import InternBullet from "../Bullet"
import Fade from "react-reveal/Fade"

const features = [
  {
    name: "How InterNFTs Came to Be",
    description:
      'The InterNFT project came from an idea that spawned in response to a communal desire to celebrate what it meant to "be an Intern" (i.e. eating ramen, working tirelessly, etc.). The NFTs were initiall meant to serve as a pass to gain access into Intern Capital. However, the idea has grown into a complete ecosystem project with real utility, a robust roadmap, and a strong backing of the community.',
    icon: LightningBoltIcon,
  },
  {
    name: "What InterNFTs Represent",
    description:
      "Each InterNFT represents an intern that has different attributes related to their stress level and indicated by various element of flare in each image. Their initial utility of an InterNFT is to be staked into one of two vaults, where they accumulate rewards. This may be a specialized currency or experience, which could then be spent in the shop to enhance utility. We can think of the interns as a reflection of ourselves. We work day and night to earn our share, and we spend it on the things we value. We are the interns, and the interns are us.",
    icon: AnnotationIcon,
  },
]

export function About() {
  return (
    <div id='about' className='about overflow-hidden relative py-48 dark text-white'>
      <Background showBackgroundImage={true} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <Fade>
          <div className='lg:text-center mb-16 relative'>
            <h2
              id='about-heading'
              className='text-base text-purple-500  font-semibold tracking-wide uppercase mb-4'
            >
              About
            </h2>
            <p className='mt-2  text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl'>
              Blood, Sweat, Tears... and Ramen
            </p>
            <p className='mt-4 max-w-2xl text-xl text-white lg:mx-auto'>
              The beating heart of the Web3 ecosystem is fueled by the ambition and promise of our
              intoooorns.
            </p>
          </div>
        </Fade>
        <div className='flex flex-row'>
          <Fade left>
            <div className='w-[52%] relative'>
              <ReactPlayer
                muted={true}
                loop={true}
                width={"100%"}
                style={{ boxShadow: "0 12px 64px 0 rgba(0,0,0,.2)" }}
                playing={true}
                url='https://player.vimeo.com/video/692045625?h=08950619e2'
              />
              <div className='text-sm text-white text-center p-2 italic'>
                Actual footage of an intern hand-drawing InterNFT artwork
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className='flex-1 pl-12'>
              {features.map((feature) => (
                <div key={feature.name} className='relative mb-10'>
                  <dt>
                    <div className='absolute justify-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                      <feature.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-medium text-white'>{feature.name}</p>
                  </dt>
                  <dd className='mt-2 ml-16 text-sm text-gray-100'>{feature.description}</dd>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
