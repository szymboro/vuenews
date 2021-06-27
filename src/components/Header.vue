<template>
  <header>
    <Slide>
      <h1>VueNews <br />/ᐠ｡ꞈ｡ᐟ\</h1>
      <router-link to="/">News</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/saved">For Later</router-link>
    </Slide>
    <router-view />
  </header>
</template>

<script>
import { Slide } from "vue3-burger-menu";
export default {
  components: {
    Slide,
  },
};
</script>