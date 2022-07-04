const express = require(`express`)
const router = express.Router()
const User = require(`../models/User`)
const Item = require(`../models/Item`)

router.get(`/items`, function (request, response) {
    response.send(`get items`)
})

router.delete(`/item`, function (request, response) {
    response.send(`delete item`)
})
router.put(`/item`, function (request, response) {
    response.send(`update item`)
})

router.post(`/item`, function (request, response) {
    const itemData = request.body
    const item = new Item({
        title :itemData.itemTitle,
        category :itemData.category,
        image :itemData.itemImg, //firebase link
        price : itemData.itemPrice,
        isApproved :false,
        description :itemData.itemDescription,
        
    })
    item.save().then(i => {
        response.status(201).send({ message: "item was added", data: i })
    }).catch(err => {
        response.status(400).send({ message: "can not add new item", err: err })
    })
    

})

module.exports = router


    // const us1 = new User({
    //     username : `khaled` ,
    //     password : `awdawd`
    // })

    // us1.save()

    // response.send(`adwawd`)

    // // User.findById(`62bca28ac15eb10443c16262` , function (error , data ){
    // //     const item1 = new Item({
    // //         title : "Iphone XS" ,
    // //         category : "phones"
    // //     })

    // //     item1.save()
    // //     data.Items.push(item1)
    // //     data.save()
    // //     response.send(data)
    // // })