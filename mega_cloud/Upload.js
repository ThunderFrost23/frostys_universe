const fileStream = fs.createReadStream('hello-world.txt')
const uploadStream = storage.upload({
  name: 'hello-world.txt',
  size: 12
})
fileStream.pipe(uploadStream)

const file = await fileStream.complete
console.log('The file was uploaded!', file)