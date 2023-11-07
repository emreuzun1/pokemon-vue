import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Pokemon from "./pages/Pokemon.vue";

const routes = [
  { path: "/", component: App },
  { path: "/pokemon/:id", component: Pokemon },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);

app.mount("#app");
