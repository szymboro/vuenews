import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Saved from "../views/Saved.vue";
import Categories from "../views/Categories.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/saved",
    name: "Saved",
    component: Saved
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
