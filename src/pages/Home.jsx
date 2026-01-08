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

      <section className="w-full max-w-2xl mx-auto p-8">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Mensaje rápido
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Envie un formulario rápido y me pondré en contacto con usted lo antes posible.
            </p>
          </div>

          <form
            className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                      dark:border-white/10 dark:bg-white/5"
            onSubmit={(ev) => {
              ev.preventDefault();
              const fd = new FormData(ev.currentTarget);
              const name = String(fd.get("name") || "");
              const email = String(fd.get("email") || "");
              const msg = String(fd.get("message") || "");

              const subject = encodeURIComponent(`Portafolio - Contacto (${name})`);
              const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${msg}`);
              window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
            }}
          >
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                Nombre
              </span>
              <input
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900
                          outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                          dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-400"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </span>
              <input
                name="email"
                type="email"
                placeholder="tuemail@dominio.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900
                          outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                          dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-400"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                Mensaje
              </span>
              <textarea
                name="message"
                placeholder="¿En qué te puedo ayudar?"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900
                          outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                          dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-400"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3
                        text-sm font-semibold text-white transition hover:bg-blue-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
     
    </LayoutMain>
  )
}
