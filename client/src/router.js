import Vue from "vue";
import Router from "vue-router";
import SearchForm from "./components/SearchForm";
import Profile from "./components/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "search",
      component: SearchForm
    },
    {
      path: "/profile/:steamid",
      name: "profile",
      component: Profile
    }
  ]
});
