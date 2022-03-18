import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "How InterNFTs Came to Be",
    description:
      "InterNFTs was an idea that a few of us who were talking about how interns' lives are (eating ramen, working without a salary, experiencing for the experience) and we wanted to celebrate that. Initially an idea worked out to be some sort of a pass for Intern Capital, InterNFTs have now become more of a cultural thing for interns in web3, from all chains. The idea that this NFT was made was to imitate how an intern would've lived their life, from the bottom rocks, all the way to wagmiland.",
    icon: LightningBoltIcon,
  },
  {
    name: "What InterNFT’s are, how they function, what they can do, and what they represent.",
    description:
      "So each InterNFT represents an intern. They have multiple traits, but the biggest representation of them are the stress levels, shown by the amount of fire in the background. Their function as an NFT initially functions as 'a person', they are able to be staked into our two vaults, namely to work for the rewards underneath it, whether it's our currency OR for experience, which then they could spend it in our shops in the future. We can think of the interns as ourselves. We work day and night to earn our share, and we spend it on the things we value. Indirectly, we're the interns, and the interns are us.",
    icon: AnnotationIcon,
  },
]

export function About() {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>About</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Blood, Sweat, Tears... and Ramen
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            The beating heart of the Terra ecosystem is fueled by the ambition and promise of our
            intoooorns.
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
