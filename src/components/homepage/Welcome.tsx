/* This example requires Tailwind CSS v2.0+ */
import internSample from "../../assets/all-interns-wide.gif"
import InternButton from "../Button"
import Fade from "react-reveal/Fade"
import dokwon from "../../assets/do-kwon.jpg"

export function Welcome() {
  return (
    <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              {" "}
              <Fade left>
                {" "}
                <div className='mt-6'>
                  <h2
                    className='text-base text-purple-500  font-semibold tracking-wide uppercase mb-2'
                  >
                    BEEF UP YOUR INTERNSHIP
                  </h2>
                  <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    Interns Produce Results
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    We at Intern Capital take our jobs seriously (sometimes). We don't have time to
                    sit and look pretty while building. A hard days work starts and ends with ramen,
                    and that is what keeps us motivated. One day, we aspire to wake up and have beef
                    flavored ramen staring back at us, rather than chicken flavored. (nothing
                    against chicken flavored).{" "}
                  </p>
                  <p className='mt-4 text-lg text-gray-500'>
                    The InternNFT project is just getting started and we plan to continue building
                    in order to increase usage, gamification, and utility for these Interns. If we
                    stop working now, we won't get our fair share of ramen and we wouldn't want that
                    now would we.
                  </p>
                  <div className='mt-6'>
                    <InternButton
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSdiGZ5hxliDhVuzOoP38YWrVECMotDqQB2l7zomVDNwhoL7Bg/viewform",
                          "_blank"
                        )
                      }
                    >
                      Join Whitelist
                    </InternButton>
                  </div>
                </div>
              </Fade>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <a
                className='bg-gray-50 hover:bg-gray-100 rounded-lg shadow px-4 py-5 sm:px-6 block'
                href='https://twitter.com/stablekwon/status/1484704692319838209'
                target={"_blank"}
                rel='noreferrer'
              >
                <div className='mb-4'>
                  <p className='mb-4'>Totally unrelated, but eating instant ramen for breakfast</p>
                  <p className='mb-8'>What a coincidence</p>
                </div>
                <div className='flex space-x-3'>
                  <div className='flex-shrink-0'>
                    <img className='h-10 w-10 rounded-full' src={dokwon} alt='' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-sm font-medium text-gray-900'>
                      <span className='hover:underline'>Do Kwon 🌕 (@stablekwon)</span>
                    </p>
                    <p className='text-sm text-gray-500'>
                      <span className='hover:underline'>January 22, 2022</span>
                    </p>
                  </div>
                  <div className='flex-shrink-0 self-center flex'></div>
                </div>
              </a>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-64 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <Fade right>
                <img
                  className='w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src={internSample}
                  alt='Inbox user interface'
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
