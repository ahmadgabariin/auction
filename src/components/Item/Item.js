import React from "react";
import './Item.css'
function Item(props) {
  return (
    <div className="item">
      <div className="item-title">{props.item.itemTitle}</div>
      <div>Time Left : {props.item.itemTimer}</div>
      <div>Current bid : {props.item.itemPrice}</div>
      <img src={props.item.itemImg} alt=''/>
    </div>
  );
}

// <Item
//         itemTitle="iphone 13"
//         itemPrice={5}  
//         itemTimer="2:01:00"
//         itemImg="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
//       />

export default Item;
