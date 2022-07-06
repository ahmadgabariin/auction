import React from "react";
import { Link } from "react-router-dom";
import './Item.css'
function Item(props) {
  return (
     // <Link to="/biding-room" state={{item:props.item}}>
        <div className="item">
          <div className="item-title">{props.item.itemTitle}</div>
          <img src={props.item.itemImg} alt=''/>
          <div>Time Left : 
            <span className="time-left-value"> {props.item.itemTimer}</span>
          </div>
          <div className="current-bid-div" >Current bid :
              <span className="current-bid-vlaue"> {props.item.itemPrice}</span> 
           </div>
        </div>
     // </Link>
    
  );
}

// <Item
//         itemTitle="iphone 13"
//         itemPrice={5}  
//         itemTimer="2:01:00"
//         itemImg="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
//       />

export default Item;
