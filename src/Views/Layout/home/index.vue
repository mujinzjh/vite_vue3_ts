<template>
  <a-layout id="home_page">
    <Aside :collapsed="collapsed"></Aside>
    <a-layout>
      <Header
        :collapsed="collapsed"
        @headerChange="changeCollapsed"
      ></Header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <transition>
          <router-view></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Aside from '../aside/index.vue'
import Header from '../header/index.vue'
export default defineComponent({
  components: {
    Aside,
    Header,
  },

  setup() {
    return {
      collapsed: ref<boolean>(false),
    }
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    },
  },
})
</script>
<style>
#home_page .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#home_page .trigger:hover {
  color: #1890ff;
}

#home_page .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
