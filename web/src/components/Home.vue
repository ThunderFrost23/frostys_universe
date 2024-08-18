<template>
  <div class="grid-container">
      <input id="fileUpload" type="file" @change="uploadFile($event)" hidden>
      <button class="upload-btn" @click="chooseFile()">UPLOAD MUSIC</button>
  </div>
</template>

<script>
import { uploadFile } from '../js/Upload.js'
export default {
  name: 'Home',
  methods: {
    chooseFile () {
      document.getElementById('fileUpload').click()
    },

    uploadFile (event) {
      const file = event.target.files[0]
      console.log(file)
      uploadFile(file)
    }
  }
}
</script>

<style>
.upload-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: #508991;
  color: white;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 10dvh;
  width: 25dvw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  transition: 0.5s;
}

.upload-btn:hover {
  background-color: #3d6f7f;
  color: white;
  text-decoration: none;
  transition: 0.5s;
}

.grid-container {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
</style>
