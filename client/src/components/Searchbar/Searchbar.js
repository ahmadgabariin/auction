import React, { useState } from 'react'
import './Searchbar.css'
import TextField from '@mui/material/TextField';
function Searchbar() {
  const [searchValue , setSearchValue] = useState(``)
  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" 
         variant="standard" name='searchInput'
          onChange={(event) => setSearchValue(event.target.value)} 
          value = {searchValue}  size='small' />
    </div>
  )
}

export default Searchbar