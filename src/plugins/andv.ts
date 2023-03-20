import { App } from 'vue';
import { message } from 'ant-design-vue';

message.config ( {
  duration: 2,
  maxCount: 3,
});

const andvComp = {
  install(app: App<Element>, options?:Object) {
    app.use(message);
  },
};
export default andvComp;