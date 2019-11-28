<template>
  <div id="app">
    <div class="container py-5">
        <div class="row">
            <div class="mw-25 mx-auto">
                <h1>Let's Wordwolf</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'router'
}
</script>

<style>
body{
  background-color: #000;
}

#app {
  font-family: 'Courgette', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
