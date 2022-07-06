const express = require(`express`)
const app = express()
const port = 4000
const api = require("./server/routes/api")
const itemApi = require(`./server/routes/itemAPI`)
const UserAPI = require(`./server/routes/UserAPI`)
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require(`mongoose`)
const moment = require("moment")
mongoose.connect(`mongodb://localhost/Auction`, { useNewUrlParser: true });


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token"
  );
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/`, api);
app.use(`/`, itemApi);
app.use(`/`, UserAPI);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


function myTimer(room) {
  console.log(room);
  
}

io.on("connection", (socket) =>{
    
    socket.on("join-room", room =>{
      socket.join(room)
    })
    socket.on("disconnect", ()=>{
       console.log("user disconnected" + socket.id);
    })
})

server.listen(port , function () {
    console.log(`Server running on port ${port}`)
})





// let y = moment(new Date()).add(1, 'days').format("lll")
// console.log(y);
// let x = new Date()
// let minute = 1000 * 60
// let hour = minute * 60
// let day = hour * 24
// //let f = y.getTime() - x.getTime()
// // let hours = Math.floor((f % day) / hour)
// // let minutes = Math.floor((f % hour) / minute)
// // let secs = Math.floor((f % minute) / 1000)
// // console.log(hours)
// // console.log(minutes)
// // console.log(secs)

