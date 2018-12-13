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
    if (time.length !== day.length)
      throw new Error('Query length not equal.')
    const option = []
    const length = day.length
    for (let i = 0; i < length; i++) {
      option.push({
        day: day[i]
      })
    }
    mongoClient.then(db => {
        const dbo = db.db("heroku_d0snmc5z")
        return dbo.collection("nckua9").find({
          $or: option
        }).toArray()
      }).then(result => {
        const answer = []
        result.map((data, index) => {
          for (let i = 0; i < length; i++) {
            if (time[i].match(data.time) && day[i].match(data.day))
              answer.push(data)
          }
        })
        res.send(answer)
      })
  } catch (e) {
    res.status(400)
    res.send(e.message)
  }
})
