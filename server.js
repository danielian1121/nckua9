const compression = require('compression')
const express = require('express')
const apiRouter = require('./api/api')
const server = express()

server.use(compression())

server.listen(process.env.PORT || 3000)

server.use('/js', express.static(`${__dirname}/static/dist/js`))

server.use('/css', express.static(`${__dirname}/static/dist/css`))

server.use('/api', apiRouter)

server.get('/result', (req, res) => {
  res.sendFile(`${__dirname}/static/dist/html/result/index.html`)
})

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/static/dist/html/home/index.html`)
})
