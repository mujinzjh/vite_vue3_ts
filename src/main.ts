/*
 * @Author: mujin
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2022-03-14 17:11:55
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
const app = createApp(App);
app.use(ElContainer);

app.mount('#app')
