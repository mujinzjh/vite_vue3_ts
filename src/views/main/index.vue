<template>
  <a-layout>
    <MJAside />
    <a-layout>
      <MJHeader />
      <a-layout-content class="main-content">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
          
        </router-view>
        <!-- <Transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </Transition> -->
      </a-layout-content>
      <MJFooter v-if="isUseFooter" />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MJFooter from "./footer.vue";
import MJAside from "./aside.vue";
import MJHeader from "./header.vue";
export default defineComponent({
  components: {
    MJFooter,
    MJAside,
    MJHeader,
  },
  setup() {
    const isUseFooter = ref(false);
    return {
      isUseFooter,
    };
  },
});
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
.main-content {
  padding: 24px;
  margin-top: 64px;
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
