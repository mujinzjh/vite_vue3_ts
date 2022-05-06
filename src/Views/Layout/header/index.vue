<template>
  <a-layout-header style="background: #fff; padding: 0">
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
  </a-layout-header>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { defineComponent, watchEffect } from 'vue'
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
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
