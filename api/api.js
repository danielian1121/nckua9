const express = require('express')
const router = express.Router()
const mongoClient = require('../models/connect')

router.get('/', (req, res) => {
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
        }).sort({
          total: -1
        }).toArray()
      }).then(result => {
        const answer = []
        const respond = {
          status: 'OK',
        }
        result.map((data, index) => {
          for (let i = 0; i < length; i++) {
            if (time[i] === data.time && day[i] === data.day)
              answer.push(data)
            else if (time[i].match(data.time) && day[i].match(data.day) && data.time !== '')
              answer.push(data)
          }
        })
        respond['data'] = answer
        res.send(respond)
      })
  } catch (e) {
    res.status(400)
    res.send(e.message)
  }
})

module.exports = router
