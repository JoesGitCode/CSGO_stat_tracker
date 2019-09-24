<template>
  <section class="search">
    <h1>Track Your Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="steamid">Steam ID</label>
        <input
          type="text"
          name="text"
          id="steamid"
          placeholder="Enter your Steam ID or your 16 digit steam number thing"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      steamid: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.steamid) {
        console.log("Enter a valid Steam ID");
      } else {
        console.log("asdfads");
      }
    }
  }
};
</script>

<style>
</style>