import { App } from "vue";
import Tabs from "./src/index.vue";

export const TabsPlugin = {
    install(app: App) {
        app.component("by-Tabs", Tabs);
    }
};

export { Tabs };
export type { TabItem, TabsProps, TabsEmits } from "./src/props";
