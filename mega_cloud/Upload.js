import { storage } from './Storage.js';

// Function to handle file upload
const handleFileUpload = async () => {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (!file) {
    console.error('No file selected');
    return;
  }

  try {
    // Upload the selected file to MEGA
    const node = await storage.upload(file.path);
    console.log('File uploaded successfully:', node);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

// Listen for changes to the file input
document.getElementById('file-input').addEventListener('change', handleFileUpload);