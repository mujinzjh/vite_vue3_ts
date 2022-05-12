import Constants from "../Constants";
import axiosHttpUtils from "../Service/axiosUtils";
import API from '@/API/api.js';
import { message } from "ant-design-vue";
import { Router } from "vue-router";
const actions = {
  logOut({ }, router: Router) {
    axiosHttpUtils(API.logoutApi).then((res: any) => {
      if (res.status == Constants.HTTP_SUCCESS_CODE) {
        sessionStorage.clear();
        router.push('/login');
        message.success('退出系统成功');
      } else {
        message.error('退出系统失败，请重试!');
      }
    })
  }
}

export default actions;