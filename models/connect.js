const MongoClient = require('mongodb').MongoClient
const config = require('../setting/config')

/* MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("heroku_d0snmc5z")
  dbo.collection("nckua9").find({
    $or: [
      {time: '56', day: '5'},
      {time: '56', day: '2'},
    ],
  }).forEach(function(res) {
    console.log(res)
  })
}) */

module.exports = MongoClient.connect(config.url, { useNewUrlParser: true })
