const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const port = 4200

server.listen(port)
console.log('Backend is listening to POST from VCS and socket connections from clients. (http://localhost:' + port + ')')

app.use(bodyParser.json())

app.post('/', (req, res) => {
  const data = req.body
  reactToReceivedEventData(data)
  res.send({
    success: true,
    message: 'Event received'
  })
})

const connectedClients = []

io.on('connection', client => {
  console.log('Client connected!')
  connectedClients.push(client)
})

const reactToReceivedEventData = (data) => {
  console.log('Reacting to event data, emitting to connected sockets...')
  let sentToClientsCount = 0
  connectedClients.forEach(client => {
    client.emit('data', data)
    sentToClientsCount++
  })
  console.log('Done (' + sentToClientsCount + ' clients were emitted to).')
}
