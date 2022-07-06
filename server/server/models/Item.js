const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const itemSchema = new Schema ({
    title : String,
    category : String,
    imageURL : String, //firebase link
    price : Number,
    available : Boolean,
    dateOfApprove : Date,
    isApproved : Boolean,
    description : String, 
  })

const Item = mongoose.model(`Item` , itemSchema , `Items`)
module.exports = Item