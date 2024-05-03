import Layout from '../../Layout/Layout'
import UserTable from '../../Components/Accounts/Users/Table/UserTable'
import { Button } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddUser from '../../Components/Accounts/Users/Modal/AddUser';

const UserList = () => {
  return (
    <Layout>
      <div className="md:container mx-auto">
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-5 mb-5 sm:mt-24">
          <div className="flex w-full flex-wrap items-center justify-between px-5">
            <h2 className='text-xl'>User List</h2>
            <Button variant="outlined" startIcon={<PersonAddAltOutlinedIcon />}
              data-twe-toggle="modal"
              data-twe-target="#exampleModalCenter"
              data-twe-ripple-init
              data-twe-ripple-color="light">Add User</Button>
          </div>
        </nav>
        <AddUser />
        <div><UserTable /></div>
      </div>
    </Layout>
  )
}

export default UserList