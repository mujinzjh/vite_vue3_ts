<template>
  <div class="login-main">
    <Main>
      <a-form
        :model="formState"
        class="form-content"
        name="horizontal_login"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          class="form-content-item"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          class="form-content-item"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            class=" focus:outline-none focus:border-indigo-500"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item class="form-content-item">
          <a-button
            class="login-button"
            type="primary"
            html-type="submit"
          >登录</a-button>
        </a-form-item>
      </a-form>
    </Main>

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import Main from './main.vue'
import { useRouter } from 'vue-router'
interface FormState {
  username: string
  password: string
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    Main,
  },
  setup() {
    const router = useRouter()
    const formState = reactive<FormState>({
      username: '',
      password: '',
    })
    const onFinish = (values: any) => {
      console.log('Success:', values)
      router.push({
        name: 'home',
      })
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const disabled = computed(() => {
      return !(formState.username && formState.password)
    })
    return {
      labelCol: { style: { width: '120px' } },
      wrapperCol: { span: 14 },
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    }
  },
})
</script>

<style lang="scss" scoped>
.login-main {
  position: relative;
  .form-content {
    .form-content-item {
      .ant-input-affix-wrapper {
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: 1px solid #d9d9d9;
      }
      .ant-input-affix-wrapper:focus,
      .ant-input-affix-wrapper-focused {
        box-shadow: none;
        border-bottom: 1px solid #4c4bd5;
      }
    }
    .ant-form-item-has-error {
      .ant-input-affix-wrapper {
        border-bottom: 1px solid #ff4d4f;
      }
    }
    .login-button {
      height: max-content;
      width: 100%;
      background: #4c4bd5;
      border-radius: 4px;
      span {
        display: block;
        line-height: 36px;
        height: 36px;
      }
    }
  }
}
</style>

