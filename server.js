const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/Item')


const app = express();

//BodyParser Middleware
app.use(bodyParser.json())

//DB COnfig

const db = require('./config/Keys').mongoURI

//connect to mongo

mongoose
    .connect(db)
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log('Error occured' + err))

app.use('/api/items', items)
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started at ${port}`))