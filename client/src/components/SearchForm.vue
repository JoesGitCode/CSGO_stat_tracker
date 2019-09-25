<template>
  <section class="search">
    <h1>Track Your Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="steamid">Steam ID</label>
        <input
          type="text"
          name="text"
          v-model="steamid"
          id="steamid"
          placeholder="Enter your Steam Name or your 17 digit steam ID"
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
  name: "SearchForm",
  data() {
    return {
      steamid: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.steamid) {
        this.$toasted.show("Please enter a valid Steam ID", {
          duration: 2000,
          icon: "exclamation-circle"
        });
      } else {
        this.$router.push(`/profile/${this.steamid}`);
      }
    }
  }
};
</script>

<style>
</style>