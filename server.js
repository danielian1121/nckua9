const express = require('express')
const fs = require('fs').promises
const url = require('url')

const server = express()

server.listen(3000)

server.get('/api', (req, res) => {
  fs.readFile('./config/107-2.json')
    .then((data) => {
      data = JSON.parse(data)
      let temp = []
      let i = req.query.index
      data.map((value, index) => {
        if(value.time == i)
         temp.push(value)
      })
      res.send(temp)
    })
})
