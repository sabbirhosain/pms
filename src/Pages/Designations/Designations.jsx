import { Button } from '@mui/material'
import LoupeIcon from '@mui/icons-material/Loupe';
import DesignationsTable from '../../Components/Accounts/Designations/Table/DesignationsTable'
import Layout from '../../Layout/Layout'
import { TEInput } from 'tw-elements-react';
const Designations = () => {
  return (
    <Layout>
      <div className="md:container mx-auto">
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-5 mb-5 sm:mt-24">
          <div className="flex w-full flex-wrap items-center justify-between px-5">
            <h2 className='text-xl uppercase'>Designations List</h2>
            <div className='flex items-center'>
              <div className="relative md:w-60 mx-auto me-5">
                <TEInput
                  type="search"
                  label="Search..."
                ></TEInput>
              </div>
              <Button variant="outlined" startIcon={<LoupeIcon />}
                data-twe-toggle="modal"
                data-twe-target="#exampleModalCenter"
                data-twe-ripple-init
                data-twe-ripple-color="light">Add Designation</Button>
            </div>
          </div>
        </nav>
        {/* <AddUser /> */}
        <div><DesignationsTable /></div>
      </div>
    </Layout>
  )
}

export default Designations