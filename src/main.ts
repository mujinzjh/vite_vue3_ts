import { createApp } from 'vue'
import App from './App.vue'
import 'nprogress/nprogress.css'
import vueRoutes from '@/router/index';
import Antd from 'ant-design-vue';
import '@/style/common.scss';
import '@/style/main.less';
import comPlugin from '@/components/index';
import {createPinia} from 'pinia'
const pinia = createPinia();
const app = createApp(App);
app.use(Antd);
app.use(vueRoutes);
app.use(pinia);
app.use(comPlugin);
app.mount("#app");

