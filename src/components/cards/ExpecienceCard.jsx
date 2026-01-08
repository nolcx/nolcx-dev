import { FormattedText } from '../ui/FormattedText'

export function ExpecienceCard ({ title, company, companyLogo, fromDate, toDate, responsibilities }) {
  return (
    <section className='flex flex-col p-6 mb-6 items-center gap-2
     bg-white/7 backdrop-blur-md border border-gray-500/30 rounded-xl
     hover:scale-105 hover:shadow-sm hover:shadow-fuchsia-100/30
     transition-transform duration-300 ease-in-out'
    >
      <header className='w-full flex flex-col justify-center'>
        <div className='flex justify-between w-full mb-2
        md:flex-row md:items-center md:gap-4'
        >
          <p className='text-lg font-bold'>
            {title}
          </p>
          <img
            src={companyLogo}
            alt={`logo-${company}.webp`}
            className='h-7'
          />
        </div>
        <p className='text-base text-dark-600 dark:text-dark-400'>
          <FormattedText
            text={`**${fromDate}** - **${toDate}**`}
            className='text-gray-400'
          />
        </p>
      </header>

      <article className='mb-4'>
        <ul className='list-disc list-inside mt-4 space-y-2'>
          {responsibilities.map((item, index) => (
            <li
              key={index}
              className='mb-4 text-lg text-gray-200 leading-relaxed text-wrap'
            >
              <FormattedText
                text={item}
                className='text-transparent font-semibold text-wrap
                bg-clip-text bg-linear-to-bl from-purple-400 via-pink-400 to-orange-600'
              />
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
