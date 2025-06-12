import { App } from "vue";
import List from "./src/index.vue";

export const ListPlugin = {
    install(app: App) {
        app.component("by-list", List);
    }
};

export { List };
export type { ListProps, ListItemProps, ListActionProps } from "./src/prop.ts";
