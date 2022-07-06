import React from 'react'
import './Searchbar.css'
import TextField from '@mui/material/TextField';
import {inject, observer } from 'mobx-react';

const Searchbar= inject("InputsStore") (observer((props)=>{

  function search (e){
     props.InputsStore.handleInput(e.target.name, e.target.value);
  }
  
  return (
    <div className='search-bar'>
      <TextField id="standard-basic" label="Search" 
         variant="standard" name='searchInput' onChange={search} size='small'  value={props.InputsStore.searchInput}/>
    </div>
  )

}))



export default Searchbar