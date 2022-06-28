import React from 'react'
import './Searchbar.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Searchbar() {

  function search (){

  }

  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" 
         variant="standard" name='searchInput' onChange={search}/>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default Searchbar