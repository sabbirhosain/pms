import React from 'react'
import Layout from '../../Layout/Layout'
import UserTable from '../../Components/Accounts/Users/Table/UserTable'
import { Button } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const UserList = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <nav class="relative flex w-full flex-wrap items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-5 mb-5 mt-24">
          <div class="flex w-full flex-wrap items-center justify-between px-5">
            <h2 className='text-xl'>User List</h2>
            <Button variant="outlined" startIcon={<PersonAddAltOutlinedIcon />}>Add User</Button>
          </div>
        </nav>
        <div><UserTable /></div>
      </div>
    </Layout>
  )
}

export default UserList