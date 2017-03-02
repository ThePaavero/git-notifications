module.exports = (event) => {
  const userName = event.changes[0].new.target.author // @todo Is this an object?
  const trigger = 'push' // @todo Ehh...
  const repositoryName = repository // @todo Is this also an object?
  const branchName = event.changes[0].new.name

  return userName +
    ' did a ' +
    trigger +
    ' to repository ' +
    repositoryName +
    ', branch ' +
    branchName
}
