import { createRouter as createVueRouter, createWebHistory, Router } from "vue-router";
import { App } from 'vue';
import Home from "@/views/Home.vue";
import Shows from "@/views/Shows.vue";

export function createRouter(app: App): Router {
  return createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/shows",
        name: "Shows",
        component: Shows
      }
    ]
  })
}
