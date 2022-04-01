import intern1 from "../../assets/samples/intern-10.jpg"
import intern2 from "../../assets/samples/intern-16.jpg"
import intern3 from "../../assets/samples/intern-22.jpg"
import intern4 from "../../assets/samples/intern-25.jpg"
import intern5 from "../../assets/samples/intern-28.jpg"
import intern6 from "../../assets/samples/intern-31.jpg"

const people = [
  {
    name: "Machu101",
    role: "Project Manager",
    imageUrl: intern1,
    twitterUrl: "#",
  },
  {
    name: "Wagmiski",
    role: "Full Stack Dev",
    imageUrl: intern2,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shrey",
    role: "Marketing",
    imageUrl: intern3,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Trevor.UST",
    role: "Advisor (Ecosystem / Partnerships)",
    imageUrl: intern4,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Gray34",
    role: "Marketing Team",
    imageUrl: intern5,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Nero",
    role: "Marketing Team",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kang",
    role: "Marketing Team",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Akiana",
    role: "Marketing Team",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vlad",
    role: "Advisor (software)",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "ten",
    role: "Marketing",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Citizen1695",
    role: "Frontend Development",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "edtechdude",
    role: "Frontend Development",
    imageUrl: intern6,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
]

export function Team() {
  return (
    <div className='team bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Our Team</h2>
            <p className='text-xl text-gray-500'>
              Just a collection of intoooorns who are building the future of tech one bowl of
              noodles at a time.
            </p>
          </div>
          <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8'>
            {people.map((person) => (
              <li key={person.name}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={person.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='space-y-2'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <h3>{person.name}</h3>
                      <p className='text-indigo-600'>{person.role}</p>
                    </div>
                    <ul className='flex space-x-5'>
                      <li>
                        <a href={person.twitterUrl} className='text-gray-400 hover:text-gray-500'>
                          <span className='sr-only'>Twitter</span>
                          <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
