<!--
 * @Author: mujin
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2023-03-16 11:07:10
 * @Description:
-->
<template>
  <span>{{ count}} </span>
  <span>{{ a }}</span>
  <el-button @click="increment">测试</el-button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLoginState,useMain } from "../stores/login/index";
import { ref } from "vue";
console.log(useLoginState());
const storesObj = useLoginState();
console.log(storesObj);
const {count} = storeToRefs(storesObj)
const a = ref(['home']);
console.log('a',a);
const {increment} = storesObj;
console.log(count);
// const main = useMain();
// const {count} = storeToRefs(main);
// const {increment} = main;

// const obj = ref(0);
// console.log(obj);
// function increment() {
//   obj.value++;
// }
console.log(1);
</script>

<style>
</style>