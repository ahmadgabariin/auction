import React from 'react'

function AddItem() {
    const handleChanges = (e) => {

    }
    return (
        <div>
            <div>
                <span>Title: </span>
                <input type="text" name="itemTitle" />
            </div>
            <span></span>
            <select id="select-input" name="category" onChange={handleChanges}>
                <option value="sold">Sold</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="owner">Owner</option>
                <option value="country">Country</option>
            </select>
            <div>
                <span>Description: </span>
                <input type="text" name="description" />
            </div>
            <div>
                <span>Upload Image: </span>
                <input type="file" name="myImage"></input>
            </div>
            <button>Add Item</button>
        </div>
    )
}

export default AddItem

// title:String
//   category:String
//   image:String //firebase link
//   price:Number
//   available:Boolean
//   dateOfApprove:Date
//   isApproved:Boolean
//   description:String