<template>
  <a-layout-footer >Ant Design ©{{ year }} Created by Ant UED</a-layout-footer>
</template>
<script lang="ts" setup>
const year = new Date().getFullYear();
</script>