/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline"
import internSample from "../../assets/intern-sample.jpg"
import InternButton from "../Button"

export function Welcome() {
  return (
    <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Interns Produce Results
                </h2>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
                  faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
                  sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <InternButton>Get started</InternButton>
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus
                    aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src={
                          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        }
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-64 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src={internSample}
                alt='Inbox user interface'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
