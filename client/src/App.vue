<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
@font-face {
  font-family: "csgo_font";
  src: URL("fonts/cs_regular.ttf") format("truetype");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "csgo_font";
}
</style>
