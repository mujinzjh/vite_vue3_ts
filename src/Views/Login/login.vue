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
          name="account"
          class="form-content-item"
          :rules="[{ required: true, message: 'Please input your account!',trigger: 'blur' }]"
        >
          <a-input v-model:value="formState.account">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          class="form-content-item"
          :rules="[{ required: true, message: 'Please input your password!',trigger: 'blur' }]"
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
import axiosHttpUtils from '@/Service/axiosUtils'
import { message } from 'ant-design-vue'
import API from '@/API/api.js'
import Constants from '../../Constants'
interface FormState {
  account: string
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
      account: '',
      password: '',
    })
    const onFinish = (values: any) => {
      console.log('Success:', values)
      axiosHttpUtils(API.loginApi, values)
        .then((res: any) => {
          console.log(res)

          if (res.status == Constants.HTTP_SUCCESS_CODE) {
            sessionStorage.setItem('token', res.data.result.token)
            sessionStorage.setItem('menu', JSON.stringify(res.data.result.menu))
            sessionStorage.setItem(
              'userInfo',
              JSON.stringify(res.data.result.user)
            )
            router.push({
              name: 'home',
            })
          } else {
            debugger
            message.error('用户名或密码错误')
          }
        })
        .catch((err: any) => {
          console.log(err)
        })
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const disabled = computed(() => {
      return !(formState.account && formState.password)
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

