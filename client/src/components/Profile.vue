<template>
  <section>
    <div v-if="loading">
      <h3>Loading Stats</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Back To Search</router-link>
    </div>
    <div v-if="profileData" class="container">
      <h1 class="steamprofile">
        <img :src="profileData.platformInfo.avatarUrl" alt class="steamPicture" />
        {{profileData.platformInfo.platformUserHandle}}
      </h1>

      <div class="grid">
        <div></div>
        <div>
          <ul>
            <li>
              <h4>Time Played</h4>
              <p>{{profileData.segments[0].stats.timePlayed.displayValue}}</p>
            </li>
            <li>
              <h4>Total Kills</h4>
              <p>{{profileData.segments[0].stats.kills.displayValue}}</p>
            </li>
            <li>
              <h4>Total Deaths</h4>
              <p>{{profileData.segments[0].stats.deaths.displayValue}}</p>
            </li>
            <li>
              <h4>KDR</h4>
              <!-- <p>
                { {const kills = profileData.segments[0].stats.kills.displayValue} /
                {const deaths = profileData.segments[0].stats.deaths.displayValue}}
              </p>-->
            </li>
          </ul>
        </div>
      </div>

      <router-link to="/">Back To Seach</router-link>
    </div>
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

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}
h1.steamprofile {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.steamPicture {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .steamPicture {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>