const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username : String,
    password : String,
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
    birthDay : Date,
    balance : Number, 
    Items : [{type : Schema.Types.ObjectId , ref: `Item`}],
    historyItem : [{type : Schema.Types.ObjectId , ref: `Item`}]
  })


const User = mongoose.model(`User` , userSchema , `Users`)
module.exports = User