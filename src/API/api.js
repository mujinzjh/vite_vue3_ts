const loginApi = {
  method: 'post',
  url: '/hms/login'
}

const logoutApi = {
  method: 'post',
  url: '/hms/logOut'
}

const loginOutApi = {
  method: 'get',
  url: '/hms/log/sysLog'
}


export default {
  loginApi,
  logoutApi,
  loginOutApi
}