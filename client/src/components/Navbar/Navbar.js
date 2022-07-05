import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange, deepPurple  } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const profilePicture = () => {
  console.log(`Clicked`)
}

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='nav-bar'>
      <Link to={`/`} >Home</Link>
      <Link to={`/additem`} >Add Item</Link>
      <div className='profile-pic-container' onClick={profilePicture}>
        <Stack direction="row" spacing={2} className = {`profile-pic`}>
          <Avatar sx={{ bgcolor: deepOrange[600] }}>AG</Avatar>
        </Stack>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>


    </div>
  )
}

export default Navbar