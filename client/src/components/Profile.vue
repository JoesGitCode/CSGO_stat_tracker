<template>
  <section>
    <div v-if="loading">
      <h3>Loading Stats</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Back To Search</router-link>
    </div>
    <div v-if="profileData" class="container">{{profileData.platformInfo.platformUserHandle}}</div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    };
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        `/api/v2/profile/steam/${this.$route.params.steamid}`
      );
      this.profileData = response.data.data;
      // eslint-disable-next-line
      console.log(this.profileData);

      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.response.data.message;
    }
  }
};
</script>

<style>
</style>