<!--
 * @Author: mujin
 * @Date: 2022-03-14 16:57:44
 * @LastEditTime: 2022-03-14 17:03:58
 * @Description: 
-->
<template>
  <header
    class="el-header"
    :style="{height}"
  >
    <slot />
  </header>
</template>

<script lang="ts">
export default {
  name: 'ElHeader',
}
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue'
interface Props {
  height?: string
}
withDefaults(defineProps<Props>(), {
  height: '60px',
})
</script>
<style lang="scss">
@import '../../styles/mixin.scss';
@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
