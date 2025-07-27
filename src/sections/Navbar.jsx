import { useState } from 'react'

const NavItems = () => {
  return <div className='nav-ul'></div>
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space text-white'>
          <a
            href='/'
            className='text-neutral-300 font-bold text-xl hover:text-white hover:bg-slate-800 transition-colors border border-black-white rounded px-4 py-2 '
          >
            Hiba Azhar
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='toggle menu'
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt='toggle'
              className='w-7 h-7'
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
