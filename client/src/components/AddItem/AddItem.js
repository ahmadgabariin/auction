import React, { useState } from "react";
import catagories from "../../categories.json";
import './AddItem.css'
import storage from '../firebase/firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import axios from "axios";

function AddItem() {
  const [imageUpload, setImageUpload] = useState(null)
  const [inputsValues, setInputsValues] = useState({ title: ``, description: ``, category: `` })
  const handleChanges = (e) => {

    setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
  };

    if (e.target.value != -1)
    {
      setInputsValues({ ...inputsValues, [e.target.name]: e.target.value })
    }
    
  }
  

  const uploadItem = () => {
    let flag = true
    Object.values(inputsValues).forEach(text => {
      if (text.trim() === "") {
        flag = false
      }
    })
    if (flag) {
      if (!imageUpload) { return }
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
      uploadBytes(imageRef, imageUpload)
        .then(() => {
          getDownloadURL(imageRef)

            .then((url) => {
              const item = { ...inputsValues, imageURL: url };
              axios
                .post(`http://localhost:4000/item`, item)
                .then((data) => {
                  setInputsValues({
                    title: ``,
                    description: ``,
                    category: ``,
                    price: 0,
                  });
                  setImageUpload(null);
                  toast.success("Item saved successfully");

            .then(url => {
              const item = { ...inputsValues, imageURL: url }
              axios.post(`http://localhost:4000/item`, item)
                .then(data => {
                  console.log(data)
                  setInputsValues({ title: ``, description: ``, category: `` })
                  alert(`Item saved successfully`)


                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    } else { alert(`Please fill whole rows`) }
  }

  return (
    <div className="add-item-container">
      <div className="add-item-grid">

        <div className="title-add-item-text">Add Item</div>

        <div className="title-add-item">
          <span>Title : </span>
          <input type="text" name="title" onChange={handleChanges} className={`input-add-item`}
            value={inputsValues[`title`]} />
        </div>

        <div className="category-add-item">
          <span>Category: </span>
          <select id="select-input" name="category" onChange={handleChanges} className={`input-add-item`}
            value={inputsValues[`category`]}
          >

            <option value= {-1}>{`Select Item`}</option>
            {catagories.map((c,index) => (
             <option key={index} value={c}>

            <option value= {-1}>{`Select Item`}</option>
            {catagories.map((c,index) => (
             <option key={index} value={c}>

                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="description-add-item">
          <span>Description : </span>
          <input type="text" name="description" onChange={handleChanges} className={`input-add-item`}
            value={inputsValues[`description`]} />
        </div>

        <div className="upload-image-add-item">
          <span>Upload Image : </span>
          <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }}></input>
        </div>

        <div className="btn-add-item-div">
          <button className="btn-add-item" onClick={uploadItem}>Add Item</button>
        </div>

      </div>
    </div>
  );
}

export default AddItem

