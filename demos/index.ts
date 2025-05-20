import { createApp } from 'vue';
import App from './app.vue';
import ByUI from '../packages/index';
import '../packages/styles/index.scss';

const app = createApp(App);
app.use(ByUI);
app.mount('#app');