const notifier = require('node-notifier')
const config = require('./../apiConfig.json')
const socket = require('socket.io-client')(config.apiUrl);

const buildMessage = (event) => {
  return `${event.payload.beanstalk_user.name} did a ${event.trigger} to repository "${event.payload.repository.title}", branch "${event.payload.branch}"`
}

socket.on('data', event => {
  console.log('Event received, showing notification')
  notifier.notify({
    'title': 'New git event',
    'message': buildMessage(event)
  })
})

console.log('Listening to events...')
