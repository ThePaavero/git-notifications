const subscribeToRepo = process.argv[2]
const useFormatter = process.argv[3]

if (typeof subscribeToRepo === 'undefined') {
  return console.log('First argument should be the repository slug. None given.')
}

const supportedFormatters = [
  'beanstalk',
  'bitbucket'
]

if (supportedFormatters.indexOf(useFormatter) < 0) {
  console.log('ERROR: Second argument should be VCS name, given is not supported or empty.')
  console.log('Supported formatters: "' + supportedFormatters.join('", "') + '"')
  return
}

const notifier = require('node-notifier')
const config = require('./apiConfig.json')
const formatter = require('./formatters/' + useFormatter)
const socket = require('socket.io-client')(config.apiUrl, {
  query: 'repo=' + subscribeToRepo
});

const buildMessage = (event) => {
  return formatter(event)
}

const outputCommits = (commitArray) => {
  commitArray.forEach(commit => {
    console.log('Commit: ' + commit.message)
  })
}

socket.on('data', event => {
  console.log('Event received, showing notification')
  notifier.notify({
    'title': 'New git event',
    'message': buildMessage(event),
    wait: true
  })
  outputCommits(event.payload.commits)
})

console.log('Listening to events, connected to socket at ' + config.apiUrl)
