import DataTable from 'react-data-table-component';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { pink } from '@mui/material/colors';
import { useAccountContextApi } from '../../../../Context/AccountContextApi';
import { useEffect } from 'react';

const DesignationsTable = () => {
  const {  designationsList, designationsLoading, DesignationsDataFetch } = useAccountContextApi()
  useEffect(() => { DesignationsDataFetch() }, [])



  const columns = [
    {
      name: 'Designation',
      selector: row => row.designation ? row.designation : "N/A",
    },
    {
      name: "Action",
      width: "130px",
      cell: row => <>
        <Tooltip title="Preview"><IconButton onClick={() => alert(row.id)}>
          <RemoveRedEyeOutlinedIcon color="primary" fontSize="small" /></IconButton></Tooltip>

        <Tooltip title="Update"><IconButton onClick={() => alert(row.id)}>
          <DriveFileRenameOutlineOutlinedIcon color="secondary" fontSize="small" /></IconButton></Tooltip>

        <Tooltip title="Delete"><IconButton onClick={() => alert(row.id)}>
          <DeleteForeverRoundedIcon fontSize="small" sx={{ color: pink[500] }} /></IconButton></Tooltip>
      </>
    }
  ];

  return (
    <DataTable
      columns={columns}
      data={designationsList}
      pagination
      progressPending={designationsLoading}
    />
  );
}

export default DesignationsTable