<template>
  <a-layout-header
    style="background: #fff; padding: 0"
    class="hear-content"
  >
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (changeCollapsed())"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (changeCollapsed())"
    />
    <user-info></user-info>
  </a-layout-header>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { defineComponent, watchEffect } from 'vue'
import UserInfo from './userInfo.vue'
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserInfo,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['headerChange'],
  setup() {},
  methods: {
    changeCollapsed() {
      this.$emit('headerChange')
    },
  },
})
</script>

<style lang="scss" scoped>
.hear-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
