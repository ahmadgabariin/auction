import React from "react";
import "./ItemRoom.css";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from "@mui/material/TextField";
import { useLocation } from 'react-router-dom';

function ItemRoom() {
  function inputHandler() {}
  const item = useLocation().state.item
  return (
    <div className="room">
      <div className="item-details">
        <div className="item-title">{item.itemTitle}</div>
        <div>Time Left :0:00</div>
        <img src={item.itemImg} alt="" />
        <p>{item.itemDescription}</p>
        <div>Current bid : {item.itemPrice}</div>
        <div className="btn-input-bid-container">
          <TextField
            id="outlined-basic"
            label="Biding..."
            variant="outlined"
            size="small"
            type="number"
            name="bidingInput"
            onChange={inputHandler}
            className="bid-input"
          />
          <Button
            variant="contained"
            color="success"
            className="btn-bid"
            size="small"
          >
           <AlarmIcon />
            Bid
          </Button>
        </div>
      </div>

      <div className="side-bar-padding-history">
        <div className="bidder-history">
          <span>khaledwani: </span>
          <span>$10</span>
        </div>
      </div>
    </div>
  );
}


export default ItemRoom;
