const express = require('express')
const mongoClient = require('./models/connect')
const server = express()

server.listen(3000)

server.use('/js', express.static(`${__dirname}/static/dist/js`))

server.use('/css', express.static(`${__dirname}/static/dist/css`))

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/static/dist/html/home/index.html`)
})

server.get('/api', (req, res) => {
  try {
    const time = JSON.parse(req.query.time)
    const day = JSON.parse(req.query.day)
    const option = []
    for (let i = 0; i < time.length; i++) {
      option.push({
        time: time[i],
        day: day[i]
      })
    }
    mongoClient.then(db => {
        const dbo = db.db("heroku_d0snmc5z")
        return dbo.collection("nckua9").find({
          $or: option,
        }).toArray()
      }).then(result => {
        res.send(result)
      })
  } catch (e) {
    res.status(500)
    res.send('Error')
  }
})
