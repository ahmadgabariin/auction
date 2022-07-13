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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
  };

=======
>>>>>>> parent of 814099a (fixed some conflicts)
    if (e.target.value != -1)
    {
      setInputsValues({ ...inputsValues, [e.target.name]: e.target.value })
    }
    
  }
  
<<<<<<< HEAD
=======
>>>>>>> bb673fcb744ff37f65ea4648580b1bbac7735113
>>>>>>> parent of 814099a (fixed some conflicts)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> parent of 814099a (fixed some conflicts)
            .then(url => {
              const item = { ...inputsValues, imageURL: url }
              axios.post(`http://localhost:4000/item`, item)
                .then(data => {
                  console.log(data)
                  setInputsValues({ title: ``, description: ``, category: `` })
                  alert(`Item saved successfully`)

<<<<<<< HEAD
=======
>>>>>>> bb673fcb744ff37f65ea4648580b1bbac7735113
>>>>>>> parent of 814099a (fixed some conflicts)
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
=======
<<<<<<< HEAD
            {catagories.map((c, index) => (
              <option key={index} value={c}>
=======
            <option value= {-1}>{`Select Item`}</option>
            {catagories.map((c,index) => (
             <option key={index} value={c}>
>>>>>>> bb673fcb744ff37f65ea4648580b1bbac7735113
>>>>>>> parent of 814099a (fixed some conflicts)
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

<<<<<<< HEAD
export default AddItem
=======
export default AddItem;
>>>>>>> parent of 814099a (fixed some conflicts)

