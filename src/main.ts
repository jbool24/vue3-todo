import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

// import { loadPlugins } from './utils/loadPlugins'
// import { registerBaseComponents } from './utils/registerBaseComponents'

process.env.NODE_ENV === "production" && (console.debug = () => {});

const app = createApp(App);

const init = async () => {
  //  await registerBaseComponents(app)
  app.use(router).mount("#app");
};

init();
