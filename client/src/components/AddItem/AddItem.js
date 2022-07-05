import React from "react";
import catagories from "../../categories.json";
import './AddItem.css'
function AddItem() {

  const handleChanges = (e) => {

  };
  
  return (
    <div className="add-item-container">
      <div className="add-item-grid">
        <div className="title-add-item-text">Add Item</div>
        <div className="title-add-item">
          <span>Title : </span>
          <input type="text" name="itemTitle" onChange={handleChanges} className={`input-add-item`}/>
        </div>
        
        <div className="category-add-item">
          <span>Category: </span>
          <select id="select-input" name="category" onChange={handleChanges} className={`input-add-item`}>
            {catagories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="description-add-item">
          <span>Description : </span>
          <input type="text" name="description" onChange={handleChanges}  className={`input-add-item`}/>
        </div>
        <div className="upload-image-add-item">
          <span>Upload Image : </span>
          <input type="file" name="myImage"></input>
        </div>
        <div className="btn-add-item">
          <button>Add Item</button>
        </div>
      </div>
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
