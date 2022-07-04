const express = require(`express`)
const router = express.Router()

router.get(`/` , function (request , response) {
    response.send(`Hello World`)
})

router.get(`/categories` , function (request , response) {
    response.send(`get categories`)
} )




module.exports = router