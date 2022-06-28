import React from 'react'
import Item from '../Item/Item'
import data from '../../data.json'
import './ItemRoom.css'
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import TextField from '@mui/material/TextField';
function ItemRoom() {

  function inputHandler(){

  }

  return (
    <div className='room'>

      <div className='item-details'>
        <Item item={data[0]}/>
        <p>{data[0].itemDescription}</p> 
        <div className='btn-input-bid-container'>
          <TextField id="outlined-basic" label="Bid" variant="outlined" size='small' 
           type="number" name="bidingInput"  onChange={inputHandler} className = "bid-input" />
          <Button variant="contained" color="success"  className='btn-bid' size='small'>
            <AlarmIcon/>Bid
          </Button>
        </div>
      </div>

      <div className='side-bar-padding-history'>
        <div className='bidder-history' >
          <span>khaledwani: </span>
          <span>$10</span>
        </div>
      </div>

    </div>
  )
}

export default ItemRoom