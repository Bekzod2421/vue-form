<template>
  <div class="container">
    <Sup />
  </div>
</template>

<script>
import Sup from "./components/SignUp.vue";

export default {
  name: "App",
  components: {
    Sup,
  },
};
</script>

<style>
body {
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px grey;
}
</style>
