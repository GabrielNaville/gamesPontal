const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/noderest', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('connected')
})

mongoose.connection.on('error', (e) => {
    console.error(e)
})

module.exports = mongoose