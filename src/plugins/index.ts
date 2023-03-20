import { App } from "vue";
import andvComp  from "./andv";

const mainPlugins = {
  install(app:App<Element>, options?:Object){
    app.use(andvComp);
  }
}
export default mainPlugins;