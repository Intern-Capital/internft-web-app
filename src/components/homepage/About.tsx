import { AnnotationIcon, LightningBoltIcon } from "@heroicons/react/outline"
import ReactPlayer from "react-player/lazy"
import { Background } from "./Background"

const features = [
  {
    name: "How InterNFTs Came to Be",
    description:
      "InterNFTs was an idea that a few of us who were talking about how interns' lives are (eating ramen, working without a salary, experiencing for the experience) and we wanted to celebrate that. Initially an idea worked out to be some sort of a pass for Intern Capital, InterNFTs have now become more of a cultural thing for interns in web3, from all chains. The idea that this NFT was made was to imitate how an intern would've lived their life, from the bottom rocks, all the way to wagmiland.",
    icon: LightningBoltIcon,
  },
  {
    name: "What InterNFTs Represent",
    description:
      "Each InterNFT represents an intern that have multiple traits, but the biggest representation of them are the stress levels, shown by the amount of flare in the background. Their function as an NFT initially functions as 'a person', they are able to be staked into our two vaults, namely to work for the rewards underneath it, whether it's our currency OR for experience, which then they could spend it in our shops in the future. We can think of the interns as ourselves. We work day and night to earn our share, and we spend it on the things we value. Indirectly, we're the interns, and the interns are us.",
    icon: AnnotationIcon,
  },
]

export function About() {
  return (
    <div className='about relative py-48 dark text-white'>
      <Background showBackgroundImage={true} />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <div className='lg:text-center mb-16 relative'>
          <h2 className='text-base text-purple-200 font-semibold tracking-wide uppercase mb-4'>
            About
          </h2>
          <p className='mt-2  text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl'>
            Blood, Sweat, Tears... and Ramen
          </p>
          <p className='mt-4 max-w-2xl text-xl text-purple-200 lg:mx-auto'>
            The beating heart of the Web3 ecosystem is fueled by the ambition and promise of our
            intoooorns.
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='w-[52%] relative'>
            <ReactPlayer
              muted={true}
              loop={true}
              width={"100%"}
              style={{ boxShadow: "0 12px 64px 0 rgba(0,0,0,.2)" }}
              playing={true}
              url='https://player.vimeo.com/video/692045625?h=08950619e2'
            />
          </div>
          <div className='flex-1 pl-12'>
            {features.map((feature) => (
              <div key={feature.name} className='relative mb-10'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-900 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-purple-200'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-sm text-gray-300'>{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
