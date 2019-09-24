<template>
  <header>
    <img :src="image" />
    <h1>Stat Tracker</h1>
  </header>
</template>

<script>
export default {
  name: "MainLogo",
  data() {
    return {
      image: require("@/assets/csgo_logo_white.png")
    };
  }
};
</script>

<style scoped>
img {
  width: 300px;
  height: 100px;
}

h1 {
  color: #fff;
  margin-top: -20px;
  width: 300px;

  font-size: 2rem;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>
