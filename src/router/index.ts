import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const reqMap: Array<any> = new Array<any>();

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

async function getData(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test')
    }, 5000);
  });
}

router.beforeEach((to, from, next) => {
  if (store.state.reqMap.length === 0) {
    store.commit('setReqMap', getData());
  }
  setTimeout(() => {
    next()
  }, 2000);
  
})

export default router;
