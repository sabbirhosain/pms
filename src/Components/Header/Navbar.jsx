import React from 'react'
import UserProfile from '../Modal/UserProfile'

const Navbar = () => {
  return (
    <>
      <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <span class="ms-2 text-xl text-black dark:text-white">Navbar</span>
          <div class="ms-5 flex w-[70%] sm:w-[20%] items-center justify-between">
            <input
              type="search"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2" />
            <UserProfile />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar