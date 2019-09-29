<template>
  <section>
    <div v-if="loading">
      <h3>Loading Stats</h3>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
        <div class="grid-stat">
          <h4>Time Played</h4>
          <p>{{profileData.segments[0].stats.timePlayed.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>Total Kills</h4>
          <p>{{profileData.segments[0].stats.kills.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>Total Deaths</h4>
          <p>{{profileData.segments[0].stats.deaths.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>KDR</h4>
          <p>{{profileData.segments[0].stats.kd.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>Accuracy</h4>
          <p>{{profileData.segments[0].stats.shotsAccuracy.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>HeadShot Percentage</h4>
          <p>{{profileData.segments[0].stats.headshotPct.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>Win Percentage</h4>
          <p>{{profileData.segments[0].stats.wlPercentage.displayValue}}</p>
        </div>
        <div class="grid-stat">
          <h4>Total Damage</h4>
          <p>{{profileData.segments[0].stats.damage.displayValue}}</p>
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
  border: #a5884d 2px solid;
  color: #a5884d;
}
.steamPicture {
  width: 40px;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-auto-flow: column; */
  grid-gap: 1rem;
}
.grid-stat {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
.grid-stat p {
  font-size: 2rem;
  color: var(--primary-color);
}
.grid-stat:first-child p {
  font-size: 1.5rem;
}
.grid-stat span {
  font-size: 1rem;
  color: #ccc;
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .grid-stat {
    text-align: center;
  }
  .grid-stat p {
    font-size: 1.5rem;
  }
}

/* Loading Animation */

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>