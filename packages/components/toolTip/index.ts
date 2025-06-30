import { App } from "vue";
import Tooltip from "./src/index.vue";

export const TooltipPlugin = {
    install(app: App) {
        app.component("by-Tooltip", Tooltip);
    }
};

export { Tooltip };
export type { TooltipProps } from "./src/props";
