module.exports = (event) => {
  console.log(event)

  const userName = event.head_commit.author.name
  const trigger = 'push' // @todo Ehh...
  const repositoryName = event.repository.name
  const branchName = event.ref.split('/')[2]

  return userName +
    ' did a ' +
    trigger +
    ' to repository ' +
    repositoryName +
    ', branch ' +
    branchName
}
