<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      v-model:openKeys="state.openKeys"
      theme="dark"
      mode="inline"
      @click="onHandleClick"
    >
      <template v-for="item in menus" :key="item.name">
        <a-sub-menu
          v-if="item.children && item.children.length"
          :key="item.name"
        >
          <template #icon>
            <CreateIcon :icon="item.icon"></CreateIcon>
          </template>
          <template #title>{{ item.title }}</template>
          <a-menu-item v-for="itemChild in item.children" :key="itemChild.name">
            <span>{{ itemChild.title }}</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.name">
          <template #icon>
            <CreateIcon :icon="item.icon"></CreateIcon>
          </template>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { createIcon as CreateIcon } from "@/components/createIcon";
import { Component, reactive } from "vue";
import { useRouter } from "vue-router";

const cacheSelectedKeys = sessionStorage.getItem('selectedKeys');
const cacheOpenKeys = sessionStorage.getItem('openKeys');
const state = reactive({
  rootSubmenuKeys: ["home", "System"],
  openKeys: cacheOpenKeys ?  JSON.parse(cacheOpenKeys) : [],
  selectedKeys: cacheSelectedKeys ? JSON.parse(cacheSelectedKeys) : ['home'],
});
const router = useRouter();

interface routerConfig {
  path: string;
  name: string;
  title: string;
  icon?: string | Component;
  children?: routerConfig[];
}

const menus: routerConfig[] = [
  {
    path: "/home",
    name: "home",
    title: "首页",
    icon: "HomeOutlined",
    children: [],
  },
  {
    path: "/system",
    name: "System",
    title: "系统管理",
    icon: "HomeOutlined",
    children: [
      {
        path: "/role",
        name: "Role",
        title: "角色管理",
      },
      {
        path: "/user",
        name: "User",
        title: "用户管理",
      },
    ],
  },
];

const onCollapse = () => {};
const onBreakpoint = () => {};

const onHandleClick = ({ item, key, keyPath })=>{
  state.selectedKeys = [key];
  if (keyPath.length >1) {
    state.openKeys = keyPath;
  } else {
    state.openKeys = []
  }
  sessionStorage.setItem('openKeys',JSON.stringify(state.openKeys));
  sessionStorage.setItem('selectedKeys', JSON.stringify(state.selectedKeys));
  router.push({name:key})
}

</script>

<style lang="scss" scoped></style>
