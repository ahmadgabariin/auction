//user scheme

{
  username: String
  password: String
  firstName: String
  lastName: String
  email: String
  phoneNumber: String
  birthDay: Date
  balance: Number
  uploadedItems:[itemscheme]   
  historyItem:[itemscheme]    
}


//item scheme
{
  title:String
  category:String
  image:String //firebase link
  price:Number
  available:Boolean
  dateOfApprove:Date
  isApproved:Boolean
  description:String
  IsSold : Boolean 
}








