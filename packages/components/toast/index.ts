import { App } from "vue";
import Toast from "./src/index.vue";

export const ToastPlugin = {
    install(app: App) {
        app.component("by-Toast", Toast);
    }
};

export { Toast };
export type { ToastProps } from "./src/props";
