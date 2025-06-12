import { App } from "vue";
import Dialog from "./src/index.vue";
import { openDialog } from "./src/api";

export const DialogPlugin = {
    install(app: App) {
        app.component("by-dialog", Dialog);
        app.config.globalProperties.$dialog = { open: openDialog };
    }
};

export { Dialog, openDialog };
export type { DialogProps } from "./src/prop";
