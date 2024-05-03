import { Button } from '@mui/material'
import LoupeIcon from '@mui/icons-material/Loupe';
import Layout from '../../Layout/Layout'

const Categories = () => {
  return (
    <Layout>
      <div className="md:container mx-auto">
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-5 mb-5 sm:mt-24">
          <div className="flex w-full flex-wrap items-center justify-between px-5">
            <h2 className='text-xl'>Categories List</h2>
            <Button variant="outlined" startIcon={<LoupeIcon />}
              data-twe-toggle="modal"
              data-twe-target="#exampleModalCenter"
              data-twe-ripple-init
              data-twe-ripple-color="light">Add Category</Button>
          </div>
        </nav>
        {/* <AddUser /> */}
        {/* <div><UserTable /></div> */}
      </div>
    </Layout>
  )
}

export default Categories