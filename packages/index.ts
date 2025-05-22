import { App } from 'vue';
import Button from './components/button/index.vue';
import Dialog from './components/dialog/index.vue';
import { openDialog } from './components/dialog/api';

const ByUI = {
  install(app: App) {
    // 组件注册
    app.component('ByButton', Button);
    app.component('ByDialog', Dialog);

    // API挂载
    app.config.globalProperties.$dialog = { open: openDialog };
  }
};

// 按需导出
export { Button, Dialog, openDialog };
export default ByUI;
