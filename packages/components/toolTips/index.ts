import { App } from "vue";
import ToolTips from "./src/index.vue";

export const ToolTipsPlugin = {
    install(app: App) {
        app.component("by-ToolTips", ToolTips);
    }
};

export { ToolTips };
export type { ToolTipsProps } from "./src/props";
