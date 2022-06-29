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
  purchasedItems:[historyScheme]
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
  
}

//purchased History scheme
{
  item:[itemscheme]
  purchaseDate:Date
  paid:Number
   
}

{
  item:[itemscheme]
  dateOfUpload:Date 
}







