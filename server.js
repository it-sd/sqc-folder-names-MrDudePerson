const newFolderName = function (folders) {
  let highestNumber = 1

  for (const folderName of folders) {
    if (folderName.startsWith('New Folder')) {
      const folderNumberA = folderName.indexOf('(')
      const folderNumberB = folderName.indexOf(')')

      let number = 1

      if (folderNumberA !== -1 && folderNumberB !== -1) {
        number = parseInt(folderName.substring(folderNumberA + 1, folderNumberB), 10)
      }

      highestNumber = Math.max(highestNumber, number)
    }
  }

  return `New Folder ${highestNumber + 1}`
}

// Test case:
const folders = ['New Folder', 'New Folder (2)', 'New Folder (3)']
const newFolder = newFolderName(folders)
console.log(newFolder) // Output: 'New Folder (4)'
