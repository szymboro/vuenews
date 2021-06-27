<template>
  <header>
    <Push>
      <h1>VueNews <br />/ᐠ｡ꞈ｡ᐟ\</h1>
      <router-link to="/">News</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/saved">For Later</router-link>
    </Push>
    <router-view />
  </header>
</template>

<script>
import { Push } from "vue3-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
  components: {
    Push, // Register your component
  },
};
</script>

<style>
#app {
  font-family: "Oxygen Mono", Sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #fca311;
}

#nav h1 {
  color: #ffffff;
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #000000;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 10px;
  cursor: pointer;
}
.bm-cross {
  background: #ffffff;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #212121; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

a:hover {
  color: #6c00a6;
}

.bm-overlay {
  background: rgb(0, 0, 0, 0);
}
.bm-item-list {
  color: #ffffff;
  margin-left: 10%;
  font-size: 20px;
}

.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>
