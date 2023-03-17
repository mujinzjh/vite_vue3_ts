/*
 * @Author: zhaojianhua
 * @Description: 
 * @Date: 2023-03-02 16:20:36
 * @LastEditTime: 2023-03-02 16:57:01
 * @FilePath: /vite_vue3_ts/src/hooks/useLocalTime.ts
 */
import moment from 'moment';
import {ref, watchEffect} from 'vue';
import type {Ref} from 'vue';
export function useLocalTime(serTime:number = 0) {
  const  diff = ref(Date.now() - serTime);
  setInterval(() => {
    diff.value = Date.now() - serTime;
    console.log(diff);
  },1000);
  return {
    diff:diff.value,
    diffValue:moment(diff.value).format('YYYY-MM-DD HH:mm:ss'),
  }
}
