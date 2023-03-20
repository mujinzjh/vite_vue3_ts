/*
 * @Author: mujin
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2023-03-20 15:55:02
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from  'pinia';
import App from './App.vue'
import router from './routes';

import 'ant-design-vue/dist/antd.css';
import '@/styles/common.scss';
import i18n from '@/locale';
import plugins from '@/plugins';
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(plugins);
app.use(i18n);

app.mount('#app')
