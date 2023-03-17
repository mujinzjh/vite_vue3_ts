/*
 * @Author: zhaojianhua
 * @Description: 
 * @Date: 2023-03-02 15:08:19
 * @LastEditTime: 2023-03-16 10:48:12
 * @FilePath: /vite_vue3_ts/src/stores/login/index.ts
 */
import { defineStore, StoreDefinition } from "pinia";
import { ref } from 'vue';


export const useLoginState: StoreDefinition = defineStore('login',{
  state:()=>{
    return{
    count:ref(0),
  }},
  getters:{
    doubles: (state:any) => state.count * 2
  },
  actions:{
    increment(){
      this.count.value++;
      sessionStorage.setItem('count', this.count.value);
    }
  }
});


export const useMain: StoreDefinition = defineStore('Main',()=>{
  const count= ref(0);
  const increment = ()=>{
    count.value++;
  };
  return {
    count, increment
  }
});