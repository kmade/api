const express = require('express')
const { name } = require('./package.json')
const app = express()
const HELLO = `Hello ${name}`
const PORT = process.PORT || 8000

app.get('/', (req, res) => {
  res.status(200).send(HELLO)
})

app.listen(PORT)
