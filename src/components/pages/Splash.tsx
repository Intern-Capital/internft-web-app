import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import SampleInterns from "../utilities/SampleInterns"
import InternButton from "../Button"
import logo from "../../assets/intern-capital.png"
const WHITELIST_URL = "https://forms.gle/xu1U7qdo946vLY7x6"
const RadialBackground = styled.div`
  background: rgb(0, 0, 0);
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  // background: rgb(199, 23, 23);
  // background: radial-gradient(circle, rgba(199, 23, 23, 0) 0%, rgba(212, 37, 37, 1) 100%);
`

export function Splash() {
  const navigate = useNavigate()
  const navigateToExternalLink = (link: string) => {
    window.open(link, "_blank")
  }

  const [imageUrl, setImageUrl] = useState("")

  // change the image every 5 seconds
  useEffect(() => {
    const delay = imageUrl ? 5000 : 0
    setTimeout(async () => {
      const internId = Math.floor((Math.random() * 100 * SampleInterns.length) / 100)
      setImageUrl(SampleInterns[internId])
    }, delay)
  }, [imageUrl])

  return (
    <div className='bg-black'>
      <div className='w-full z-10  relative'>
        <img src={logo} className=' top-10 w-80 max-w-md m-auto' alt='Intern Capital' />
      </div>
      <RadialBackground className='absolute top-0 left-0 w-full h-full bg-cover bg-center z-2 '>
        <div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
          <main className='flex text-3xl text-white p-10 rounded-md'></main>
        </div>
      </RadialBackground>
      <div className='animate-flicker z-0'>
        <div className='h-screen w-full'></div>
        <div
          className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
            <main className='flex bg-black p-10 rounded-md opacity-80'>
              <p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl'></p>
              <div className='sm:ml-6'></div>
            </main>
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center z-1'>
        <div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
          <main className='bg-black p-10 rounded-md opacity-80 lg:flex'>
            <div className='flex'>
              <p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl mb-5 lg:mr-5'>
                4.14.22
              </p>
            </div>
            <div className=''>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6 '>
                <h1 className='text-4xl font-extrabold text-gray-200 mb-5 tracking-tight sm:text-5xl'>
                  Intern Not Found
                </h1>
                <p className='mb-6 text-base text-gray-100'>Interns are coming...</p>
                <InternButton
                  onClick={() => {
                    window.open(WHITELIST_URL, "_blank")
                  }}
                  className='m-auto'
                >
                  JOIN INTERNFT WHITELIST
                </InternButton>
                <p className='mb-6 text-base text-gray-100'></p>
              </div>
              {/* <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                  <Link
                    to='/home'
                    type='submit'
                    className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Enter Site
                  </Link>
                </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
