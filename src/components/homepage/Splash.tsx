import { Link, useNavigate } from "react-router-dom"
import deskBackgroundImage from "../../assets/desk-background.jpg"
import purpleBody from "../../assets/purple-body.png"
import styled from "styled-components"
import internLogo from "../../assets/intern-capital-logo.svg"
import videoBackground from "../../assets/space.mp4"
import { useEffect, useState } from "react"
import intern0 from "../../assets/samples/intern-0.png"
import intern1 from "../../assets/samples/intern-1.png"
import intern2 from "../../assets/samples/intern-2.png"
import intern3 from "../../assets/samples/intern-3.png"
import intern4 from "../../assets/samples/intern-4.png"
import intern5 from "../../assets/samples/intern-5.png"
import intern6 from "../../assets/samples/intern-6.png"
import intern7 from "../../assets/samples/intern-7.png"
import intern8 from "../../assets/samples/intern-8.png"
import intern9 from "../../assets/samples/intern-9.png"

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
]

export function Splash() {
  const navigate = useNavigate()

  const navigateToExternalLink = (link: string) => {
    window.open(link, "_blank")
  }

  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const delay = imageUrl ? 10000 : 0
    setTimeout(async () => {
      const internId = Math.floor((Math.random() * 100 * 10) / 100)
      console.log("switching image to ", internId)
      console.log("switching image to ", internBgs[internId])
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
    </div>
  )
}
