import { App } from "vue";
import Avatar from "./src/index.vue";

export const AvatarPlugin = {
    install(app: App) {
        app.component("by-Avatar", Avatar);
    }
};

export { Avatar };
export type { AvatarProps } from "./src/props";
