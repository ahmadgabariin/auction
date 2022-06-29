const express = require(`express`)
const app = express()
const port = 3001
const api = require("./server/routes/api")
const itemApi = require(`./server/routes/itemAPI`)
const UserAPI = require(`./server/routes/UserAPI`)
const mongoose = require(`mongoose`)

mongoose.connect(`mongodb://localhost/Auction`, { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use( express.urlencoded( { extended : false } ) )
app.use(`/`, api)
app.use(`/`, itemApi)
app.use(`/`, UserAPI)


app.listen(port , function () {
    console.log(`Server running on port ${port}`)
})