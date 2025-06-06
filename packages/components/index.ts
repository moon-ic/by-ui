import { App } from "vue";
import Button from "./button/index.vue";
import Dialog from "./dialog/index.vue";
import Input from "./input/index.vue";
import Upload from "./upload/index.vue";
import Avatar from "./avatar/index.vue";
import List from "./list/index.vue";
import Tabs from "./tabs/index.vue";
import Toast from "./toast/index.vue";
import ToolTips from "./toolTips/index.vue";
import { openDialog } from "./dialog/api";

const ByUI = {
    install(app: App) {
        app.component("Button", Button);
        app.component("Dialog", Dialog);
        app.config.globalProperties.$dialog = { open: openDialog };
        app.component("Input", Input);
        app.component("Upload", Upload);
        app.component("Upload", Avatar);
        app.component("Upload", List);
        app.component("Upload", Tabs);
        app.component("Upload", Toast);
        app.component("Upload", ToolTips);
    }
};

export { Button, Dialog, openDialog, Input, Upload, Avatar, List, Tabs, Toast, ToolTips };
export default ByUI;
