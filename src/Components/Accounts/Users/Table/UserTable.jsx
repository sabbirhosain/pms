import DataTable from 'react-data-table-component';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { pink } from '@mui/material/colors';
import { useAccountContextApi } from '../../../../Context/AccountContextApi';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import NoImg from "../../../../assets/blank-user.png"

const UserTable = () => {
  const { UserDataFetch, userList, userLoading, userCurrentPage, setUserCurrentPage, paginationComponentOptions, customLoadingText } = useAccountContextApi()
  useEffect(() => { UserDataFetch() }, [userCurrentPage])

  // image loading
  const ImageCell = ({ image }) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoaded = () => { setIsLoading(false) };
    return (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <ColorRing
              visible={true}
              height="50"
              width="50"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#25D366', '#25D366', '#25D366', '#25D366', '#25D366']}
            />
          </div>
        )}
        <img
          src={image || NoImg}
          style={{
            display: isLoading ? 'none' : 'block',
            maxWidth: '40px',
            maxHeight: '40px',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          alt="image"
          onLoad={handleImageLoaded}
        />
      </div>
    );
  };


  const columns = [
    {
      name: "SL NO",
      selector: (row, index) => String((userList?.page - 1) * 10 + index + 1)

    },
    {
      name: 'Images',
      selector: row => <ImageCell picture={row.image} />
    },
    {
      name: 'Name',
      selector: row => row.first_name + ' ' + row.last_name,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'User Name',
      selector: row => row.username,
    },
    {
      name: 'Phone Number',
      selector: row => row.phone ? row.phone : "N/A",
    },
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
      data={userList?.results}
      pagination
      paginationServer
      progressComponent={customLoadingText}
      paginationTotalRows={userList?.count}
      onChangePage={(page) => setUserCurrentPage(page)}
      paginationComponentOptions={paginationComponentOptions}
      progressPending={userLoading}
    />
  );
}

export default UserTable