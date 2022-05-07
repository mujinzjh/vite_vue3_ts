import { createApp } from 'vue'
import App from './App.vue'
import vueRoutes from '@/router/index';
import Antd from 'ant-design-vue';
import '@/style/common.scss';
import '@/style/main.less';


const app = createApp(App);
app.use(Antd);
app.use(vueRoutes);
app.mount("#app");

