import React from "react";
import data from "../../data.json";
import "./ItemRoom.css";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from "@mui/material/TextField";
function ItemRoom() {
  function inputHandler() {}

  return (
    <div className="room">
      <div className="item-details">
        <div className="item-title">{data[0].itemTitle}</div>
        <div>Time Left : {data[0].itemTimer}</div>
        <img src={data[0].itemImg} alt="" />
        <p>{data[0].itemDescription}</p>
        <div>Current bid : {data[0].itemPrice}</div>
        <div className="btn-input-bid-container">
          <TextField
            id="outlined-basic"
            label="Bid"
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
