module.exports = (event) => {
  const userName = event.sender.login
  const trigger = 'push' // @todo Ehh...
  const repositoryName = event.repository.name
  const branchName = event.repository.default_branch // @todo Is this the actual branch?

  return userName +
    ' did a ' +
    trigger +
    ' to repository ' +
    repositoryName +
    ', branch ' +
    branchName
}
