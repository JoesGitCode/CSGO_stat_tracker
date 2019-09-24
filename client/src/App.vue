<template>
  <div class="container">
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm";
export default {
  name: "app",
  components: {
    SearchForm
  }
};
</script>

<style>
@font-face {
  font-family: "csgo_font";
  src: URL("../public/cs_regular.ttf") format("truetype");
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
