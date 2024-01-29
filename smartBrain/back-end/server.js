const http = require('http')

const express = require('express')

const APP = express()
const PORT = process.env.PORT || 3000

APP.use(express.json())

const database = {
  users: [
    {
      id: '1',
      name: 'john',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '2',
      name: 'sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date(),
    },
  ],
}

APP.get('/', (req, res) => {
  res.send('this is working')
})

APP.post('/signin', (req, res) => {
  console.log(req.body)
  console.log('------------------------')
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success')
  } else {
    res.status(400).json('error logging in')
  }
})

APP.listen(PORT, () => {
  console.log('App is listening on http://localhost:3000')
})
