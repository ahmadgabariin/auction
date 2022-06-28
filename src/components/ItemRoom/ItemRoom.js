import React from 'react'
import Item from '../Item/Item'
import data from '../../data.json'

function ItemRoom() {
  console.log(data)
  return (
    <div>
        <Item item={data[0]}/>
        <p>{data[0].itemDescription}</p>
        <input type="number" placeholder="Enter your biding" />
        <button>Bid</button>
        <div>
           <span>khaledwani: </span>
           <span>$10</span>
        </div>
    </div>
  )
}

export default ItemRoom