import storage from './Storage.js'

const uploadFile = async (file) => {
  const upload = await storage.upload({
    name: file.name,
    size: file.size,
    data: file,
    target: storage.root
  })

  console.log('Upload complete:', upload)
}

export default uploadFile
