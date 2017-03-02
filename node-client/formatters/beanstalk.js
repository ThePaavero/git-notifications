module.exports = (event) => {
  return event.payload.beanstalk_user.name +
    ' did a ' +
    event.trigger +
    ' to repository ' +
    event.payload.repository.title +
    ', branch ' +
    event.payload.branch
}
