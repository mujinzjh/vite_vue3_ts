/*
 * @Author: mujin
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2023-03-16 16:39:22
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from  'pinia';
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/Button'
import router from './routes';

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
import '@/styles/common.scss';
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(Antd);
app.use(ElContainer).use(ElButton);

app.mount('#app')
