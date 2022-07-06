import { inject, observer } from "mobx-react";
import React from "react";
import catagories from "../../categories.json";
function AddItem(props) {

  const handleChanges = (e) => {
    let value = e.target.value
    if(e.target.name === "myImage"){
      value = e.target.files[0]
    }
    props.InputsStore.handleInput(e.target.name, value);
  };
  
  const addItem =()=>{
     console.log(props.InputsStore);

  }

  return (
    <div>
      <div>
        <span>Title: </span>
        <input type="text" name="itemTitle" onChange={handleChanges} value={props.InputsStore.itemTitle}/>
      </div>
      <select id="select-input" name="category" onChange={handleChanges} value={props.InputsStore.category} >
        {catagories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      
      <div>
        <span>Description: </span>
        <input type="text" name="description" onChange={handleChanges} value={props.InputsStore.description}/>
      </div>

      <div>
        <span>Price: </span>
        <input type="number" name="price" onChange={handleChanges} value={props.InputsStore.price}/>
      </div>

      <div>
        <span>Upload Image: </span>
        <input type="file" name="myImage" onChange={handleChanges} value={props.InputsStore.myImage}/>
      </div>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default inject("InputsStore")(observer(AddItem))

// title:String
//   category:String
//   image:String //firebase link
//   price:Number
//   available:Boolean
//   dateOfApprove:Date
//   isApproved:Boolean
//   description:String
