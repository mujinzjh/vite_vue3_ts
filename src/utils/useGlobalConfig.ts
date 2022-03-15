/*
 * @Author: mujin
 * @Date: 2022-03-15 10:18:57
 * @LastEditTime: 2022-03-15 10:22:10
 * @Description: 
 */

import { ComponentInternalInstance, getCurrentInstance } from "vue";

export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance();
  if (!instance) {
    console.error('useGlobalConfig必须在setup中使用');
    return
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {};
}
