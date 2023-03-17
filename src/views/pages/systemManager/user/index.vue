<template>
  <div class="page-wrap-content">
    <div v-for="iten in list">
    <span>{{iten.title}}</span>
    </div>
  </div>
</template>
<script setup>
import {reactive} from 'vue';
const list = reactive([]);
for (let i = 0; i < 1000; i++) {
  let obj = {
    title:`title${i}`
  }
  list.push(obj);
  
}
</script>