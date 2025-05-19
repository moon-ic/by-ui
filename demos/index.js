import { createApp } from 'vue';
import App from './App.vue';
import ByUI from '../packages/index';
// import '../src/styles/index.less';

const app = createApp(App);
app.use(ByUI);
app.mount('#app');