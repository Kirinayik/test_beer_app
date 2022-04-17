import { createApp } from "vue";
import App from "./App.vue";
import { key, store } from "@/store";
import "normalize.css";
import router from "@/router/router";

createApp(App).use(router).use(store, key).mount("#app");
