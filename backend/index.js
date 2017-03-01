var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var bodyParser = require('body-parser')
var port = 4200

server.listen(port)
console.log('Backend is listening to POST from VCS and socket connections from clients. (http://localhost:' + port + ')')

app.use(bodyParser.json())

app.post('/', function (req, res) {
  var data = req.body
  reactToReceivedEventData(data)
  res.send({
    success: true,
    message: 'Event received'
  })
})

var connectedClients = []

io.on('connection', function (client) {
  console.log('Client connected!')
  connectedClients.push(client)
})

var reactToReceivedEventData = function (data) {
  console.log('Reacting to event data, emitting to connected sockets...')
  var sentToClientsCount = 0
  connectedClients.forEach(function (client) {
    client.emit('data', data)
    sentToClientsCount++
  })
  console.log('Done (' + sentToClientsCount + ' clients were emitted to).')
}
