/*
 * @Author: zhaojianhua
 * @Description: 国际化配置
 * @Date: 2023-03-20 09:45:55
 * @LastEditTime: 2023-03-20 09:58:00
 * @FilePath: /vite_vue3_ts/src/locale/index.ts
 */
import {createI18n} from 'vue-i18n';
import en from './lang/en-us';
import zh from './lang/zh-cn';

const i18n = createI18n({
  locale: 'zh',
  messages:{
    zh,
    en
  }
})

export default i18n;
