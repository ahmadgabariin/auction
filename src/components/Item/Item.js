import React from "react";

function Item(props) {
  return (
    <div>
      <div>{props.item.itemTitle}</div>
      <img src={props.item.itemImg} alt=''/>
      <div>Price: {props.item.itemPrice}</div>
      <div>Remaining time: {props.item.itemTimer}</div>
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
