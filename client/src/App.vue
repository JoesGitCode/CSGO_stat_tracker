<template>
  <div class="container">
    <MainLogo />
    <router-view />
    <footer>&copy; Joseph Young 2019</footer>
  </div>
</template>

<script>
import MainLogo from "./components/MainLogo";
export default {
  name: "app",
  components: {
    MainLogo
  }
};
</script>

<style>
@font-face {
  font-family: "csgo_font";
  src: URL("../fonts/cs_regular.ttf") format("truetype");
}

:root {
  --primary-color: #be9033;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: url("./assets/csgo_background.png") no-repeat center center/cover;
  background-repeat: repeat-y;
  height: 100vh;
  width: 100vw;
  font-family: "csgo_font";
  color: #fff;
  line-height: 1.6;
}

a {
  color: #fff;
  text-decoration: none;
}

ul {
  list-style: none;
}
.body-bg-no-image {
  background: var(--primary-color);
}
.body-bg-image {
  background: var(--primary-color) url("./assets/csgo_logo.png") no-repeat top
    center;
}
.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
}
.form-group {
  margin: 1rem 0;
}
.search {
  background: rgba(0, 0, 0, 0.5);
  border: 4px #fff solid;
  margin-top: 1rem;
  padding: 2rem;
}
input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

#steamid:focus {
  outline-color: var(--primary-color);
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}

.btn:hover {
  background: #a5884d;
}

.btn:active {
  background: #fff;
  color: var(--primary-color);
}

footer {
  position: fixed;
  bottom: 0;
  text-align: center;
}
</style>
