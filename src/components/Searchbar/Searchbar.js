import React from 'react'
import './Searchbar.css'
import TextField from '@mui/material/TextField';
function Searchbar() {

  function search (){

  }

  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" 
         variant="standard" name='searchInput' onChange={search} size='small' />
    </div>
  )
}

export default Searchbar