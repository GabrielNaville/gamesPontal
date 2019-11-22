const express = require('express')
const bodyParse = require('body-parser')
const host = '0.0.0.0'
const port = 3000

const app = express ();

var getDatabase = require('./app/database/index')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false}));

require('./app/controllers/routes')(app)
console.log('servidor rodando na porta 3000');

app.listen(port, host);