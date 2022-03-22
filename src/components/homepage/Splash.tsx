import { Link, useNavigate } from "react-router-dom"
import deskBackgroundImage from "../../assets/desk-background.jpg"
import styled from "styled-components"
import internLogo from "../../assets/intern-capital-logo.svg"
import videoBackground from "../../assets/space.mp4"
import { useEffect, useState } from "react"

// #region interns
import intern0 from "../../assets/samples/intern-0.jpg"
import intern1 from "../../assets/samples/intern-1.jpg"
import intern2 from "../../assets/samples/intern-2.jpg"
import intern3 from "../../assets/samples/intern-3.jpg"
import intern4 from "../../assets/samples/intern-4.jpg"
import intern5 from "../../assets/samples/intern-5.jpg"
import intern6 from "../../assets/samples/intern-6.jpg"
import intern7 from "../../assets/samples/intern-7.jpg"
import intern8 from "../../assets/samples/intern-8.jpg"
import intern9 from "../../assets/samples/intern-9.jpg"
import intern10 from "../../assets/samples/intern-10.jpg"
import intern11 from "../../assets/samples/intern-11.jpg"
import intern12 from "../../assets/samples/intern-12.jpg"
import intern13 from "../../assets/samples/intern-13.jpg"
import intern14 from "../../assets/samples/intern-14.jpg"
import intern15 from "../../assets/samples/intern-15.jpg"
import intern16 from "../../assets/samples/intern-16.jpg"
import intern17 from "../../assets/samples/intern-17.jpg"
import intern18 from "../../assets/samples/intern-18.jpg"
import intern19 from "../../assets/samples/intern-19.jpg"
import intern20 from "../../assets/samples/intern-20.jpg"
import intern21 from "../../assets/samples/intern-21.jpg"
import intern22 from "../../assets/samples/intern-22.jpg"
import intern23 from "../../assets/samples/intern-23.jpg"
import intern24 from "../../assets/samples/intern-24.jpg"
import intern25 from "../../assets/samples/intern-25.jpg"
import intern26 from "../../assets/samples/intern-26.jpg"
import intern27 from "../../assets/samples/intern-27.jpg"
import intern28 from "../../assets/samples/intern-28.jpg"
import intern29 from "../../assets/samples/intern-29.jpg"
// #endregion
const internBgs = [
  intern0,
  intern1,
  intern2,
  intern3,
  intern4,
  intern5,
  intern6,
  intern7,
  intern8,
  intern9,
  intern10,
  intern11,
  intern12,
  intern13,
  intern14,
  intern15,
  intern16,
  intern17,
  intern18,
  intern19,
  intern20,
  intern21,
  intern22,
  intern23,
  intern24,
  intern25,
  intern26,
  intern27,
  intern28,
  intern29,
]

export function Splash() {
  const navigate = useNavigate()

  const navigateToExternalLink = (link: string) => {
    window.open(link, "_blank")
  }

  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const delay = imageUrl ? 5000 : 0
    setTimeout(async () => {
      const internId = Math.floor((Math.random() * 100 * 30) / 100)
      setImageUrl(internBgs[internId])
    }, delay)
  }, [imageUrl])

  return (
    <div className='bg-black'>
      <div className='animate-flicker'>
        <div className='h-screen w-full'></div>
        <div
          className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
            <main className='flex bg-black p-10 rounded-md opacity-80'>
              <p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl'>404</p>
              <div className='sm:ml-6'>
                <div className='sm:border-l sm:border-gray-200 sm:pl-6 '>
                  <h1 className='text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl'>
                    Intern Not Found
                  </h1>
                  <p className='mt-1 text-base text-gray-100'>Aren't you supposed to be working?</p>
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
      <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'>
        <div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
          <main className='flex bg-black p-10 rounded-md opacity-80'>
            <p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl'>404</p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6 '>
                <h1 className='text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl'>
                  Intern Not Found
                </h1>
                <p className='mt-1 text-base text-gray-100'>Aren't you supposed to be working?</p>
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
