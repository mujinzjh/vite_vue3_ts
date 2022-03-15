/*
 * @Author: mujin
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2022-03-15 10:33:58
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/Button'

const app = createApp(App);
app.use(ElContainer).use(ElButton);

app.mount('#app')
