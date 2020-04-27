import Vue from 'vue'
import VueRouter from 'vue-router'


// Import components
import App from './App.vue'
import Home from "./components/Home"
import User from "./components/Users"

// Install the plugin
Vue.use(VueRouter);
// new a route object, then exposed, import this object in the main.js page, put it in the vue instance;
const routers = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: User
  }
];

const router = new VueRouter({
  routes: routers,
  mode: "history"
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
