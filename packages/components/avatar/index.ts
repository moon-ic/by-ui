import { App } from "vue";
import Avatar from "./src/index.vue";
import AvatarGroup from "./src/group.vue";

export const AvatarPlugin = {
    install(app: App) {
        app.component("by-Avatar", Avatar);
        app.component("by-AvatarGroup", AvatarGroup);
    }
};

export { Avatar, AvatarGroup };
export type { AvatarProps } from "./src/props";
