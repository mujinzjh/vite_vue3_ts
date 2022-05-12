import { createApp } from 'vue'
import App from './App.vue'
import 'nprogress/nprogress.css'
import vueRoutes from '@/router/index';
import store from './store'
import Antd from 'ant-design-vue';
import '@/style/common.scss';
import '@/style/main.less';
import comPlugin from '@/components/index';

const app = createApp(App);
app.use(Antd);
app.use(vueRoutes);
app.use(store);
app.use(comPlugin);
app.mount("#app");

