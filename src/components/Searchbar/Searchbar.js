import React from 'react'
import './Searchbar.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Searchbar() {
  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" variant="standard" />
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default Searchbar