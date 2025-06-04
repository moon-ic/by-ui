import { App } from "vue";
import Button from "./button/index.vue";
import Dialog from "./dialog/index.vue";
import Input from "./input/index.vue";
import Upload from "./upload/index.vue";
import { openDialog } from "./dialog/api";

const ByUI = {
    install(app: App) {
        app.component("Button", Button);
        app.component("Dialog", Dialog);
        app.config.globalProperties.$dialog = { open: openDialog };
        app.component("Input", Input);
        app.component("Upload", Upload);
    }
};

export { Button, Dialog, openDialog, Input, Upload };
export default ByUI;
