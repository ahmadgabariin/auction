import React, { useEffect, useState } from "react";
import "./ItemRoom.css";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from "@mui/material/TextField";
import { useLocation } from 'react-router-dom';
import socket from '../../socketManager/socketManager';


function ItemRoom() {

  const [timer, setTimer] = useState(() => calculateTimer())
  const [item, setItem] = useState(useLocation().state.item)

  function calculateTimer() {
      let dateOfExpire = new Date("Jul 7, 2022 7:30 PM").getTime()
      let now = new Date().getTime()
      let minute = 1000 * 60
      let hour = minute * 60
      let day = hour * 24
      let gap = dateOfExpire - now
      let hours = Math.floor((gap % day) / hour)
      let minutes = Math.floor((gap % hour) / minute)
      let secs = Math.floor((gap % minute) / 1000)
      hours = hours < 10 ? "0" + hours : "" + hours
      minutes = minutes < 10 ? "0" + minutes : "" + minutes
      secs = secs < 10 ? "0" + secs : "" + secs
      return {
        hr: hours, min: minutes, sec: secs
      } 
  }

  useEffect(() => {
    socket.joinRoom(item.id)
    const myTimer = setInterval(() => {
      setTimer(calculateTimer)
    }, 1000);

    return () => {
      clearInterval(myTimer)
    }

  }, [])

  function inputHandler() { }


  return (

    <div className="room">
      <div className="item-details">
        <div className="item-title">{item.itemTitle}</div>
        <div>Time Left: {timer.hr}:{timer.min}:{timer.sec}</div>
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
