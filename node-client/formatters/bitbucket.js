module.exports = (event) => {
  const userName = event.actor.username
  const trigger = 'push' // @todo Ehh...
  const repositoryName = event.repository.name
  const branchName = event.push.changes[0].new.name

  return userName +
    ' did a ' +
    trigger +
    ' to repository ' +
    repositoryName +
    ', branch ' +
    branchName
}
