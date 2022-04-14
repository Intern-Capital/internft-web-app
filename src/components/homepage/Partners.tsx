import onePlanetImage from '../../assets/logos/one-planet.svg'
import angelImage from '../../assets/logos/angel.png'
import terraspacesLogo from '../../assets/logos/terraspaces.png'
import tixLogo from '../../assets/logos/tix.svg'
import apolloLogo from '../../assets/logos/apollodao.svg'
import InternButton from '../Button'

export function Partners() {
  return (
    <div className='partners shadow-2xl overflow-visible bg-gradient-to-r from-darkviolet to-darkpurple'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div className='mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 sm:mb-6'>
            <a
              href='https://www.oneplanetnft.io/'
              target='_blank'
              rel='noreferrer'
              className='col-span-1 flex justify-center py-8 px-8 border border-gray-800 hover:bg-darkviolet'
            >
              <img className='max-h-12' src={onePlanetImage} alt='One Planet' />
            </a>
            <a
              href='https://www.angelprotocol.io/'
              target='_blank'
              rel='noreferrer'
              className='col-span-1 flex justify-center py-8 px-8 border border-gray-800 hover:bg-darkviolet '
            >
              <img className='max-h-12' src={angelImage} alt='Angel Protocol' />
            </a>
            <a
              href='https://www.tix.money/'
              target='_blank'
              rel='noreferrer'
              className='col-span-1 flex justify-center py-8 px-8 border border-gray-800 hover:bg-darkviolet'
            >
              <img className='max-h-12' src={tixLogo} alt='Tix' />
            </a>
            <a
              href='https://app.apollo.farm/'
              target='_blank'
              rel='noreferrer'
              className='col-span-1 flex justify-center py-8 px-8 border border-gray-800 hover:bg-darkviolet'
            >
              <img className='max-h-12' src={apolloLogo} alt='Apollo' />
            </a>
            <a
              href='https://terraspaces.org'
              target='_blank'
              rel='noreferrer'
              className='col-span-1 flex justify-center py-8 px-8 border border-gray-800 hover:bg-darkviolet'
            >
              <img className='max-h-12' src={terraspacesLogo} alt='StaticKit' />
            </a>
          </div>
          <div className='pl-0 lg:pl-12'>
            <h2 className='lg:max-w-md text-3xl font-extrabold text-white text-left  lg:max-w-xl lg:text-left'>
              Interns support a wide range of projects across borders, protocols, and countries.
            </h2>
            <p className='mt-3 max-w-3xl text-lg text-gray-100 mb-8'>
              With support from our partners, we are building a community of the greatest minds
              accross a wide range of verticals. Our interns are working on projects that are
              challenging, but rewarding. Join us.
            </p>
            <InternButton
              onClick={() => {
                window.open(
                  "https://www.oneplanetnft.io/launchpad/randombox/62543b7e4aaded78ff674d6e",
                  "_blank"
                )
              }}
            >
              BUY NOW
            </InternButton>
          </div>
        </div>
      </div>
    </div>
  )
}
