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
  width: 100%;
  max-width: 300px;
  height: 100px;
  margin-left: -8px;
}

h1 {
  color: var(--primary-color);
  margin-top: -20px;
  width: 100%;
  max-width: 300px;
  font-size: 2rem;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }

  h1 {
    display: block;
    margin: auto;
    text-align: center;
  }
}
</style>
