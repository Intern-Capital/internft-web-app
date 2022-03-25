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
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
        <div className='lg:col-start-2 relative'>
          <dl className='mt-10 space-y-10'>
            {communicationFeatures.map((item) => (
              <div key={item.id} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-purple-200'>{item.name}</p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-200'>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='mt-10 p-20 relative lg:mt-0 lg:col-start-1'>
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
