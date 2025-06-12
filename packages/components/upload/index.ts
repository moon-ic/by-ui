import { App } from "vue";
import Upload from "./src/index.vue";

export const UploadPlugin = {
    install(app: App) {
        app.component("by-Upload", Upload);
    }
};

export { Upload };
export type { UploadProps } from "./src/props";
