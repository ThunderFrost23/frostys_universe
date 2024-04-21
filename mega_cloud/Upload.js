document.getElementById('file-upload').addEventListener('change', async event => {
  const storage = require('./Storage')
  const file = event.target.files[0];
  
  const upload = await storage.upload({
    name: file.name,
    size: file.size,
    data: file,
    target: storage.root,
  });

  console.log('Upload complete:', upload);
});