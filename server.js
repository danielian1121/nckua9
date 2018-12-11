const express = require('express')
const fs = require('fs').promises
const url = require('url')

const server = express()

server.listen(3000)

server.get('/api', (req, res) => {
  const getTime = req.query.index.split(',')
  fs.readFile('./config/107-2.json')
    .then((data) => {
      data = JSON.parse(data)
      let result = []
      data.map((value, index) => {
        for (let i = 0; i < getTime.length; i++) {
          if(value.time == getTime[i])
           result.push(value)
        }
      })
      res.send(result)
    })
})
