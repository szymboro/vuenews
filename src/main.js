import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { toastMsg } from "@/assets/toast.js";

const app = createApp(App);
app.use(router);

app.config.globalProperties.$toastMsg = toastMsg;
app.mount("#app");
