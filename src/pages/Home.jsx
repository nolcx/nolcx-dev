import profilePhotoNC from '../assets/nolancalderon.webp'
import LinkedInIcon from '../components/icons/LinkedInIcon.jsx'
import GitHubIcon from '../components/icons/GitHubIcon.jsx'
import CVIcon from '../components/icons/CVIcon.jsx'
import { glassButton } from '../styles/classes'
import { LayoutMain } from '../layouts/layout-main'

export function Home () {
  return (
    <LayoutMain>
      <section className='flex justify-center items-center space-y-6 w-full p-8 gap-15'>
        <header>
          <h1 className='heading-1 text-3xl leading-17'>
            <span className='block text-5xl font-bold'>Hello!</span>
            <span className='block'>My name is <span className='text-4xl font-mono bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent'>Nolan Calderón</span>,</span>
            <span className='block'>I'm a <span className=' text-3xl font-mono bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text font-extrabold text-transparent'>Computer Systems Engineer</span>.</span>
          </h1>
          <div className='flex mt-6 gap-4'>
            <a className={glassButton} href='https://github.com/nolcx'>
              <GitHubIcon fill='#fff' width='20px' height='20px' />
              GitHub
            </a>
            <a className={glassButton} href='https://www.linkedin.com/in/nolan-calderon-668313328/'>
              <LinkedInIcon fill='#fff' width='20px' height='20px' />
              LinkedIn
            </a>
            <a className={glassButton} href='https://www.linkedin.com/in/nolan-calderon-668313328/'>
              <CVIcon fill='#fff' width='20px' height='20px' />
              Download CV
            </a>
          </div>
        </header>
        <aside>
          <img className='h-80 w-80 object-cover rounded-xl ' src={profilePhotoNC} alt='nolancalderon.webp' />
        </aside>
      </section>
    </LayoutMain>
  )
}
