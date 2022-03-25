import onePlanet from "../../assets/logos/one-planet.svg"

export function Partners() {
  return (
    <div className='partners bg-darkviolet shadow-2xl overflow-visible'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <h2 className='max-w-md mx-auto text-3xl font-extrabold text-white text-center lg:max-w-xl lg:text-left'>
            Interns support a wide range of projects across borders, protocols, and countries.
          </h2>
          <div className='flow-root self-center mt-8 lg:mt-0'>
            <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'>
                <img className='h-12' src={onePlanet} alt='Workcation' />
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'>
                <img className='h-12' src={onePlanet} alt='Workcation' />
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4'>
                <img className='h-12' src={onePlanet} alt='Workcation' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
