import React, { useEffect, useRef, useState } from "react";
import "./ItemRoom.css";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from "@mui/material/TextField";
import { useLocation } from 'react-router-dom';
import socket from '../../socketManager/socketManager';
import axios from "axios";
import { inject } from 'mobx-react';



function ItemRoom(props) {
  const [timer, setTimer] = useState(() => calculateTimer())
  const [item, setItem] = useState(useLocation().state)
  const [bidInput, setBidInput] = useState("")
  const [bid, setBid] = useState(0)

  useEffect(() => {

    socket.joinRoom(item.id)
    const myTimer = setInterval(() => {
      setTimer(calculateTimer)

    }, 1000);

    return () => {
      clearInterval(myTimer)
    }

  }, [])

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

  function bidHandler(e) {
    setBidInput(e.target.value)
  }

  socket.socket.on("biding", biddata => {
    setBid(biddata)
  })

  function addBid() {
    if (bidInput.trim() !== "") {

      axios.post(`http://localhost:4000/bid`,
        {
          bidValue: parseInt(bidInput),
          itemRoom: item.id
        }
      )
        .then(data => {
          console.log(data)
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div className="room">
      <div className="item-details">
        <div className="item-title">{item.title}</div>
        <div>Time Left: {timer.hr}:{timer.min}:{timer.sec}</div>
        <img src={item.imageURL} alt="" />
        <p>{item.description}</p>
        <div>Current bid : {item.price}</div>
        <div className="btn-input-bid-container">
          <TextField
            id="outlined-basic"
            label="Biding..."
            variant="outlined"
            size="small"
            type="number"
            name="bidingInput"
            onChange={bidHandler}
            className="bid-input"
            value={bidInput}
          />
          <Button
            variant="contained"
            color="success"
            className="btn-bid"
            size="small"
            onClick={addBid}
          >
            <AlarmIcon />
            Bid
          </Button>
        </div>
      </div>

      <div className="side-bar-padding-history">
        <div className="bidder-history">
          <span>khaledwani: </span>
          <span>${bid}</span>
        </div>
      </div>
    </div>
  );
}


export default inject("ItemsStore")(ItemRoom)
