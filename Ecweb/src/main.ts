import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import lazyPlugin from "./directives/lazy-plugin";
const pinia = createPinia();
createApp(App).use(router).use(pinia).use(lazyPlugin).mount("#app");
