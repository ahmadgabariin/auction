const express = require(`express`)
const app = express()
const port = 3001
const api = require("./server/routes/api")
const mongoose = require(`mongoose`)

app.use(express.json())
app.use( express.urlencoded( { extended : false } ) )
app.use(`/`, api)


app.listen(port , function () {
    console.log(`Server running on port ${port}`)
})