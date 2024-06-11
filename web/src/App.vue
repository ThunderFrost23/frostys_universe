<template>
  <div id="app">
    <h1 class="welcome-text">Welcome to the Frosty's Universe!</h1>
    <img src="./assets/kaito-vocaloid.gif"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: -1px 0 #2c3e50, 0 1px #2c3e50, 1px 0 #2c3e50, 0 -1px #2c3e50;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
