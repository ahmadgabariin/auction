import React from "react";

function Item(props) {
  return (
    <div>
      <div>{props.itemTitle}</div>
      <img src={props.itemImg} />
      <div>{props.itemPrice}</div>
      <div>{props.itemTimer}</div>
      <div>{props.itemDescription}</div>
    </div>
  );
}

// <Item
//         itemTitle="iphone 13"
//         itemPrice={5}
//         itemDescription="phone as new, without scratches"
//         itemTimer="2:01:00"
//         itemImg="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
//       />

export default Item;
