/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, MailIcon } from "@heroicons/react/outline"
import { Background } from "./Background"

const communicationFeatures = [
  {
    id: 1,
    name: "Phase 1 - Q2 2022",
    description: "InternNFT Launch with 6,942 available for mint and 69.42 UST per NFT",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: "Phase 2 - Staking Vaults",
    description:
      "Vaults provide intrinsic XP for interns while also providing in-game currency accumulation for future shop feature to accumulate items and rewards",
    icon: MailIcon,
  },
  {
    id: 3,
    name: "Phase 3- Item Shop Launch",
    description: "Weekly items available to purchase based on progress of the InternNFT",
    icon: MailIcon,
  },
  {
    id: 4,
    name: "Phase 4 - Evolving of InterNFT",
    description:
      "InterNFTs serve as an entry ticket to all new projects on Intern Capital and provide additional utility in the ecosystem",
    icon: MailIcon,
  },
]
export function Roadmap() {
  return (
    <div className='roadmap overflow-hidden relative py-48 dark text-white'>
      <Background showBackgroundImage={true} />
      <div className='max-w-7xl m-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-start'>
        <div className='lg:col-start-2 relative'>
          <dl className='space-y-10'>
            {communicationFeatures.map((item) => (
              <div className='relative' key={"roadmap-" + item.id}>
                <dt>
                  <div className='absolute justify-center text-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 '>
                    <span className='font-extrabold -pt-1 h-6 w-6 text-lg' aria-hidden='true'>
                      {item.id}
                    </span>
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-purple-200'>{item.name}</p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='mt-10 pr-5 relative lg:mt-0 lg:col-start-1'>
          <h3 className='text-2xl font-extrabold text-white sm:text-3xl'>Roadmap</h3>
          <p className='mt-3 text-lg text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus
            eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
          </p>
        </div>
      </div>
    </div>
  )
}
