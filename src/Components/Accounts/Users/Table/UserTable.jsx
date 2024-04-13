import DataTable from 'react-data-table-component';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { pink } from '@mui/material/colors';
const UserTable = () => {
  const columns = [
    {
      name: 'Name',
      selector: row => row.title,
    },
    {
      name: 'Email',
      selector: row => row.year,
    },
    {
      name: 'User Name',
      selector: row => row.year,
    },
    {
      name: 'Phone Number',
      selector: row => row.year,
    },
    {
      name: 'Gender',
      selector: row => row.year,
    },
    {
      name: 'User Type',
      selector: row => row.year,
    },
    {
      name: "Action",
      cell: row => <>
        <Tooltip title="Preview"><IconButton onClick={() => alert(row.id)}>
          <RemoveRedEyeOutlinedIcon color="primary" fontSize="small" /></IconButton></Tooltip>

        <Tooltip title="Update"><IconButton onClick={() => alert(row.id)}>
          <DriveFileRenameOutlineOutlinedIcon color="secondary" fontSize="small" /></IconButton></Tooltip>

        <Tooltip title="Delete"><IconButton onClick={() => alert(row.id)}>
          <DeleteForeverRoundedIcon  fontSize="small" sx={{ color: pink[500] }} /></IconButton></Tooltip>
      </>
    }
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
    />
  );
}

export default UserTable