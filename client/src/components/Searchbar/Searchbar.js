import React from 'react'
import './Searchbar.css'
import TextField from '@mui/material/TextField';
import {inject, observer } from 'mobx-react';

function  Searchbar (props){

  function search (e){
    
  }
  
  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" 
         variant="standard" name='searchInput' onChange={search} size='small'/>
    </div>
  )
}

  



export default Searchbar