function newFolderName (existingFolders) {
  let index = 2
  let name = 'New Folder'

  while (existingFolders.includes(name)) {
    name = 'New Folder (' + index + ')'
    index++
  }

  return name
}

module.exports = { newFolderName }
