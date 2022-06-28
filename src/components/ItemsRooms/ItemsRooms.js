import React from 'react'
import data from '../../data.json'
import Item from './../Item/Item';
function ItemsRooms() {
  return (
    <div>{
         data.map((item,index)=><Item key={index} item={item}/>)
        }</div>
  )
}

export default ItemsRooms