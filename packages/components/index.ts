import { App } from 'vue';
import Button from './button/index.vue';
import Dialog from './dialog/index.vue';
import { openDialog } from './dialog/api';

const ByUI = {
  install(app: App) {
    app.component('ByButton', Button);
    app.component('ByDialog', Dialog);
    app.config.globalProperties.$dialog = { open: openDialog };
  }
};

export { Button, Dialog, openDialog };
export default ByUI;
