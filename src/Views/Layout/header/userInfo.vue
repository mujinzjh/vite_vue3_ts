<template>
  <a-dropdown
    :trigger="['click']"
    class="user-content"
  >
    <a
      class="ant-dropdown-link"
      @click.prevent
    >
      <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      {{userInfo().username}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="1">
          <lock-outlined />
          修改密码
        </a-menu-item>
        <a-menu-item key="2">
          <logout-outlined />
          退出系统
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  DownOutlined,
  UserOutlined,
  LockOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

export default defineComponent({
  components: {
    DownOutlined,
    UserOutlined,
    LockOutlined,
    LogoutOutlined,
  },
  setup() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
      console.log(`Click on item ${key}`)
    }
    const userInfo = () => {
      const user = sessionStorage.getItem('userInfo')
      return user ? JSON.parse(user) : {}
    }
    return {
      onClick,
      userInfo,
    }
  },
})
</script>
<style lang="scss" scoped>
.user-content {
  margin-right: 24px;
}
</style>