const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    birthDay: Date,
    balance: Number,
   // uploadedItems:[itemscheme],
   // purchasedItems:[historyScheme]
  })


const User = mongoose.Model(`User` , userSchema , `Users`)
module.exports = User