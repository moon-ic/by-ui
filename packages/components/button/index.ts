import { App } from "vue";
import Button from "./src/index.vue";

export const ButtonPlugin = {
    install(app: App) {
        app.component("by-button", Button);
    }
};

export { Button };
export type { ButtonProps } from "./src/props";
