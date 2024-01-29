const http = require('http')

const express = require('express')

const APP = express()
const PORT = process.env || 3000

APP.get('/', (req, res) => {
  res.send('this is working')
})

APP.listen(PORT, () => {
  console.log('App is listening on http://localhost:3000')
})
