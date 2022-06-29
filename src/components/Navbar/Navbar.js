import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-bar'>
      <Link to={`/`} >Home</Link>
      <Link to={`/additem`} >Add Item</Link>
    </div>
  )
}

export default Navbar