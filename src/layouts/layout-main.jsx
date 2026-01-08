export function LayoutMain ({ children }) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header className='flex justify-between items-center p-4'>
        <p className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text
        text-3xl font-extrabold text-transparent'
        >
          nolcx.dev
        </p>
        <nav aria-label='Main Navigation' className='flex gap-3'>
          <a href=''>Home</a>
          <a href=''>Experiences</a>
          <a href=''>Projects</a>
          <a href=''>Stack</a>
          <a href=''>Contact</a>
        </nav>
      </header>
      <main className='flex flex-col justify-center items-center space-y-6 p-8 gap-15'>
        {children}
      </main>
      <footer>
        <p>2025 My Personal Website</p>
      </footer>
    </div>
  )
}
