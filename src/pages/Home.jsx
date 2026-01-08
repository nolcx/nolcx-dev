import profilePhotoNC from '../assets/nolancalderon.webp'
import LinkedInIcon from '../components/icons/LinkedInIcon.jsx'
import GitHubIcon from '../components/icons/GitHubIcon.jsx'
import CVIcon from '../components/icons/CVIcon.jsx'
import { LayoutMain } from '../layouts/layout-main'
import { ExpecienceCard } from '../components/cards/ExpecienceCard.jsx'
import experiences from '../data/experiences.js'

export function Home () {
  return (
    <LayoutMain>
      {/* Presentation */}
      <section className='grid md:grid-cols-2 max-w-5xl w-full'>
        <header className='flex flex-col justify-center items-start'>
          <h1 className='flex flex-col
          heading-1 text-6xl font-mono font-extrabold text-transparent
          bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text'
          >
            Nolan Calderón
          </h1>
          <p className='text-3xl font-mono font-extrabold text-transparent text-wrap
          bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text'
          >
            Computer Systems Engineer | Full Stack Developer
          </p>
          <ul className='flex mt-6 gap-4'>
            <li>
              <a
                href='https://github.com/nolcx'
                target='_blank'
                rel='noreferrer'
                className='flex px-4 py-2 items-center gap-2
                bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30 rounded-full
                text-dark-200
                hover:scale-105 transition-transform'
              >
                <GitHubIcon fill='#fff' width='20px' height='20px' />
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/nolan-calderon-668313328/'
                target='_blank'
                rel='noreferrer'
                className='flex px-4 py-2 items-center gap-2
                bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30 rounded-full
                text-dark-200
                hover:scale-105 transition-transform'
              >
                <LinkedInIcon fill='#fff' width='20px' height='20px' />
                LinkedIn
              </a>
            </li>
            <li
              href='https://www.linkedin.com/in/nolan-calderon-668313328/'
              className='flex px-4 py-2 items-center gap-2
              bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30 rounded-full
              text-dark-200
              hover:scale-105 transition-transform'
            >
              <CVIcon fill='#fff' width='20px' height='20px' />
              Download CV
            </li>
          </ul>
        </header>
        <div class={`w-80 h-80 border-[3px] border-transparent justify-self-end
            bg-linear-to-bl from-yellow-600 to-yellow-700
            bg-clip-border rounded-xl overflow-hidden
            shadow-lg shadow-yellow-200/20
            transition-transform flex items-center hover:scale-105 duration-300 ease-in-out`}
        >
          <img
            className='w-full h-full object-cover'
            src={profilePhotoNC}
            alt='nolancalderon.webp'
          />
        </div>
      </section>

      {/*  Experience */}
      <section className='max-w-3xl'>
        <h2 className='heading-2 text-3xl text-center font-bold mb-7'>
          Professional Experience
        </h2>
        {[...experiences].reverse().map(experience => (
          <ExpecienceCard
            key={experience.id}
            {...experience}
          />
        ))}
      </section>
    </LayoutMain>
  )
}
