import { App } from "vue";
import Tabs from "./src/index.vue";

export const TabsPlugin = {
    install(app: App) {
        app.component("by-Tabs", Tabs);
    }
};

export { Tabs };
export type { TabProps } from "./src/props";
