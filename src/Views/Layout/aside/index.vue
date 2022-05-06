<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      @click="menuClick"
    >
      <template
        v-for="(item,index) in menuList"
        :key="index"
      >
        <template v-if="item.children && item.children.length"></template>
        <template v-else>
          <a-menu-item :key="item.path">
            <user-outlined />
            <span>{{item.meta.title}}</span>
          </a-menu-item>
        </template>
      </template>
      <!-- <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item> -->
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    let router = useRouter()
    return {
      selectedKeys: ref<string[]>([]),
      router,
      menuList: ref<any>([]),
    }
  },
  mounted() {
    this.menuList = this.router.options.routes[2].children
    this.selectedKeys.push(this.router.currentRoute.value.fullPath)
  },
  methods: {
    menuClick({ item, key, keyPath }) {
      this.router.push(key)
    },
  },
})
</script>
