const express = require(`express`)
const router = express.Router()

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
    response.send(`post item`)
})

module.exports = router