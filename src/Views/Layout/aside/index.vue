<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    :inline-collapsed="collapsed"
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      @click="menuClick"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <template
        v-for="(item) in menuList"
        :key="item.id"
      >
        <template v-if="item.children && item.children.length">
          <a-sub-menu :key="item.path">

            <template #icon>
              <div v-if="item.path.includes('system')">
                <switcher-outlined />
              </div>
              <div v-else>
                <database-outlined />
              </div>
            </template>
            <template #title>{{item.name}}</template>
            <a-menu-item
              v-for="(itemChild) in item.children"
              :key="itemChild.path"
            >
              <span>{{itemChild.name}}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="item.path">
            <home-outlined />
            <span>{{item.name}}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  HomeOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SwitcherOutlined,
  DatabaseOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
    SwitcherOutlined,
    DatabaseOutlined,
  },
  setup() {
    let router = useRouter()
    const state = reactive({
      selectedKeys: ref<string[]>([]),
      openKeys: ref<string[]>([]),
      menuList: ref<any>([]),
      rootSubmenuKeys: [],
    })
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      )

      state.openKeys = latestOpenKey ? [latestOpenKey] : []
    }
    return {
      ...toRefs(state),
      router,
      onOpenChange,
    }
  },
  mounted() {
    const menu: string | null = sessionStorage.getItem('menu')
    this.menuList = menu && JSON.parse(menu)
    this.selectedKeys.push(this.router.currentRoute.value.fullPath)
  },
  methods: {
    menuClick({ item, key, keyPath }) {
      this.router.push(key)
    },
  },
})
</script>
