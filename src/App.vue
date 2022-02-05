<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dummy">Dummy</router-link> |
    <router-link to="/buttons">Buttons</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/formgroup">Form Group</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/tabs">Tabs</router-link> |
    <router-link to="/formmodal">FormModal</router-link> |
    <router-link to="/pagination">Pagination</router-link> |
    <router-link to="/alerts">Alerts</router-link> |
    <router-link to="/spinner">Spinner</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
