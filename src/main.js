import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/layout.css";
import "./assets/css/sidebar.css"

const app = createApp(App);

app.use(router);

app.mount("#app");