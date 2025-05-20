import { App } from 'vue';
import Button from './components/button/index.vue';
import Dialog from './components/dialog/index.vue';
import { openDialog } from './components/dialog/api'

export { Button, Dialog };
export default {
    install(app: App) {
        app.component('by-button', Button);
        app.component('by-dialog', Dialog);
        app.config.globalProperties.$dialog = { open: openDialog }
    }
 };