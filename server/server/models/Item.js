const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const itemSchema = new Schema ({
    title : String,
    category : String,
    image : String, //firebase link
    price : Number,
    available : Boolean,
    dateOfApprove : Date,
    dateOfExpire : Date,
    isApproved : Boolean,
    description : String, 
  })

const Item = mongoose.model(`Item` , itemSchema , `Items`)
module.exports = Item



//date of expire 11/11 13:05 --> 12/11  
//