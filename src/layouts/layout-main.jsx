export function LayoutMain ({ children }) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <header className='flex justify-between items-center p-4'>
        <h1 className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent'>nolcx.dev</h1>
        <nav className='flex gap-3'>
          <a href=''>Home</a>
          <a href=''>Experiences</a>
          <a href=''>Projects</a>
          <a href=''>Contact</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        2025 My Personal Website
      </footer>
    </div>
  )
}
