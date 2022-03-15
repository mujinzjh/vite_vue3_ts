/*
 * @Author: mujin
 * @Date: 2022-03-15 10:31:06
 * @LastEditTime: 2022-03-15 10:33:11
 * @Description: 
 */
import { App } from 'vue';
import ElButton from './button.vue';

export default {
  install(app: App) {
    app.component(ElButton.name, ElButton);
  }
}