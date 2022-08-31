import { defineStore } from 'pinia';
import state from './state';
import actions from "./actions";

export const useMainStore = defineStore('main',{
  state:()=>{
    return state;
  }, 
  actions


})