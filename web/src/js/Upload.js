import storage from './Storage.js'

document.getElementById('file-upload').addEventListener('change', async event => {
  const file = event.target.files[0]

  const upload = await storage.upload({
    name: file.name,
    size: file.size,
    data: file,
    target: storage.root
  })

  console.log('Upload complete:', upload)
})
