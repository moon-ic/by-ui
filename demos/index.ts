import { createApp } from 'vue';
import App from './app.vue';
import ByUI from '@by-ui/components';

const app = createApp(App);
app.use(ByUI);
app.mount('#app');