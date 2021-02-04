const mongoose = require('mongoose')

connectionURL = 'mongodb://127.0.0.1:27017/musicbook-data'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})