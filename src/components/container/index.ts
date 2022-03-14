/*
 * @Author: mujin
 * @Date: 2022-03-14 17:05:39
 * @LastEditTime: 2022-03-14 17:07:46
 * @Description: 
 */
import { App } from 'vue';
import ElContainer from './Container.vue'
import ElHeader from './Header.vue'
import ElFooter from './Footer.vue'
import ElAside from './Aside.vue'
import ElMain from './Main.vue'

export default {
  install(app: App) {
    app.component(ElContainer.name, ElContainer)
    app.component(ElHeader.name, ElHeader)
    app.component(ElFooter.name, ElFooter)
    app.component(ElAside.name, ElAside)
    app.component(ElMain.name, ElMain)
  }
}