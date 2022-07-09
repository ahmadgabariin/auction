const express = require(`express`)
const router = express.Router()

router.get(`/categories` , function (request , response) {
    response.send(`get categories`)
} )

router.get(`/test` , function (request , response) {
    request.io.emit("buy", 1234)
    response.send(`get categories`)
  } )

module.exports = router