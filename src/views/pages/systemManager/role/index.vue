
<template>
  <div class="page-wrap-content">
    <a-button @click="handleClick">测试</a-button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';

const handleClick = ()=>{
  message.success('测试最大次数');
};
</script>