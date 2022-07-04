import React from "react";
import catagories from "../../categories.json";
function AddItem() {

  const handleChanges = (e) => {

  };
  
  return (
    <div>
      <div>
        <span>Title: </span>
        <input type="text" name="itemTitle" onChange={handleChanges}/>
      </div>
      <select id="select-input" name="category" onChange={handleChanges}>
        {catagories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <div>
        <span>Description: </span>
        <input type="text" name="description" onChange={handleChanges}/>
      </div>
      <div>
        <span>Upload Image: </span>
        <input type="file" name="myImage"></input>
      </div>
      <button>Add Item</button>
    </div>
  );
}

export default AddItem;

// title:String
//   category:String
//   image:String //firebase link
//   price:Number
//   available:Boolean
//   dateOfApprove:Date
//   isApproved:Boolean
//   description:String
