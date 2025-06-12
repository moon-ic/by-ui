import { App } from "vue";
import Input from "./src/index.vue";

export const InputPlugin = {
    install(app: App) {
        app.component("by-input", Input);
    }
};

export { Input };
export type { InputProps } from "./src/prop.ts";
