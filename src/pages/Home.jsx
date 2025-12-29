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
