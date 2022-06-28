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

export default Item;
