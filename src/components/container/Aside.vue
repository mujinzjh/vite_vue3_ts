<!--
 * @Author: mujin
 * @Date: 2022-03-14 16:41:43
 * @LastEditTime: 2022-03-14 17:13:53
 * @Description: 
-->
<template>
  <aside
    class="el-aside"
    :style="{width}"
  >

  </aside>
</template>

<script lang="ts">
export default {
  name: 'ElAside',
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue'

type PropValues = {
  width: string
}

withDefaults(defineProps<PropValues>(), {
  width: '300px',
})
</script>

<style lang="scss">
@import '../../styles/mixin';
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
