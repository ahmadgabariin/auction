import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import AccountMenu from '../AccountMenu/AccountMenu'



function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    console.log(e.target.value)
    setAnchorEl(null);
  };

  return (
    <div className='nav-bar'>
      <Link to={`/`} >Home</Link>
      <Link to={`/additem`} >Add Item</Link>
      <div className='profile-pic-container'>
        <AccountMenu/> 
      </div>
    </div>
  )
}

export default Navbar