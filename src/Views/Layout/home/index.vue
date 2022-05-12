<template>
  <a-layout id="home_page">
    <Aside :collapsed="collapsed"></Aside>
    <a-layout class="content-container">
      <Header
        :collapsed="collapsed"
        @headerChange="changeCollapsed"
      ></Header>

      <a-layout-content :style="{padding: '24px', background: '#e2e2e2', overflow:'auto' }">
        <router-view v-slot="{ Component }">
          <div
            style="overflow:hidden"
            class="wrap-content"
          >
            <transition
              name="
            content"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </div>

        </router-view>
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
