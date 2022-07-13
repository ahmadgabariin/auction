import React from "react";
import { Link} from "react-router-dom";
import './Item.css'
function Item(props) {
  const item=JSON.parse(JSON.stringify(props.item));
  return ( 
        <Link className="item" to="/biding-room" state={item}>
            <div className="item-title">{props.item.title}</div>
            <img src={props.item.imageURL} alt='' />
            <div>Time Left :
              <span className="time-left-value"> less than 24h</span>
            </div>
            <div className="current-bid-div" >Current price :
              <span className="current-bid-vlaue"> {props.item.price}</span>
            </div>
        </Link>

  );
}
export default Item;
