import { App } from 'vue';
import Button from './button/index.vue';
import Dialog from './dialog/index.vue';
import Input from './input/index.vue';
import { openDialog } from './dialog/api';

const ByUI = {
  install(app: App) {
    app.component('Button', Button);
    app.component('Dialog', Dialog);
    app.component('Input', Input);
    app.config.globalProperties.$dialog = { open: openDialog };
  }
};

export { Button, Dialog, Input, openDialog };
export default ByUI;
