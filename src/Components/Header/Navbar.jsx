import React from 'react'
import UserProfile from '../Modal/UserProfile'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useAuthContext } from '../../Context/AuthContexApi';
const Navbar = () => {
  const { toggleSidebar } = useAuthContext()
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white py-2 shadow-sm lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className='sm:w-64 flex items-center justify-between'>
            <span className="ms-2 hidden sm:block text-lg text-black dark:text-white uppercase">pms system</span>
            <button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false'
              type="button"
              onClick={() => toggleSidebar()}
            > <MenuRoundedIcon /></button>
          </div>
          <div><UserProfile /> </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar