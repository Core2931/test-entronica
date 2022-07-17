const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.post('/profile', (req, res)=> {
    console.log("data: ",req.body)
})
app.listen(5000, ()=> {
    console.log('Start Server ON PORT 5000')
})
