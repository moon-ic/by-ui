import { createApp } from "vue";
import App from "./app.vue";
import { ByUI } from "@by-ui/components";

const app = createApp(App);

Object.values(ByUI).forEach((item) => {
    app.use(item);
});
app.mount("#app");
