const express = require(`express`)
const router = express.Router()


router.get(`/user`, function (request, response) {
    response.send(`get user`)
})

router.delete(`/user`, function (request, response) {
    response.send(`delete user`)
})
router.put(`/user`, function (request, response) {
    response.send(`update user`)
})

router.post(`/user`, function (request, response) {
    response.send(`post user`)
})

module.exports = router