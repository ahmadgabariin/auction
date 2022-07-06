import React, { useState } from "react";
import catagories from "../../categories.json";
import './AddItem.css'
import storage from '../firebase/firebase'
import { ref , uploadBytes, getDownloadURL } from "firebase/storage"
import {v4} from "uuid"

function AddItem() {
  const [imageUpload, setImageUpload] = useState(null)
    const handleChanges = (e) => {
    
  };

  const uploadItem = () => {
    if (! imageUpload) { return }
    const imageRef = ref(storage , `images/${imageUpload.name + v4() }`)
    uploadBytes(imageRef, imageUpload)
    .then (() => {
      getDownloadURL(imageRef)
      .then( url => console.log(url))
      .catch( error => console.log(error))
    })
    .catch( error => console.log(error))
  } 

  
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
          <select id="select-input" name="cat egory" onChange={handleChanges} className={`input-add-item`}>
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
          <input type="file" name="myImage" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
        </div>
        <div className="btn-add-item-div">
          <button className="btn-add-item" onClick={uploadItem}>Add Item</button>
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
