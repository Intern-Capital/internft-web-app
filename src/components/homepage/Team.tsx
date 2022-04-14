import intern1 from "../../assets/samples/intern-10.jpg"
import intern2 from "../../assets/samples/intern-16.jpg"
import intern3 from "../../assets/samples/intern-22.jpg"
import intern4 from "../../assets/samples/intern-25.jpg"
import intern5 from "../../assets/samples/intern-28.jpg"
import intern6 from "../../assets/samples/intern-31.jpg"
import intern7 from "../../assets/samples/intern-32.jpg"
import intern8 from "../../assets/samples/intern-33.jpg"
import intern9 from "../../assets/samples/intern-34.jpg"
import intern10 from "../../assets/samples/intern-35.jpg"
import intern11 from "../../assets/samples/intern-36.jpg"

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
    imageUrl: intern7,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vlad",
    role: "Advisor (software)",
    imageUrl: intern8,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "ten",
    role: "Marketing",
    imageUrl: intern9,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "citizen1740",
    role: "Frontend Development",
    imageUrl: intern10,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "edtechdude",
    role: "Frontend Development",
    imageUrl: intern11,
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
