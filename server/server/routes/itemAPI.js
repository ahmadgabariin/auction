const express = require(`express`);
const router = express.Router();
const Item = require(`../models/Item`);
const data = require("../../data.json");

router.get(`/items`, function (request, response) {
  let categoryName = request.query.category;
  if (categoryName) {
    Item.find (
      {
        category: categoryName,
      },
       function (err, items) {
        if (err) {
          response.status(500).send(err);
          return;
        } else if (!items) { 
          response.status(404).send("No Results");
          return;
        } 
        response.send(items);
      }
    );
  } else {
    Item.find({}, function (err, items) {
      response.send(items);
    });
  }
});

router.delete(`/item`, function (request, response) {
  response.send(`delete item`);
});
router.put(`/item`, function (request, response) {
  response.send(`update item`);
});

router.post(`/item`, function (request, response) {
  const item = request.body;
  const newItem = new Item(item);
  newItem
    .save( function (error , savedItem) {
      if ( error ) {
        response.status(500).send(error)
        return
      }
      response.status(201).send(savedItem)
    } )

});

module.exports = router;

