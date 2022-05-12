/*
 * @Author: mujin
 * @Date: 2021-09-13 23:05:33
 * @LastEditTime: 2021-11-13 17:37:13
 * @Description:
 */
import axios from 'axios';
import Constants from '@/Constants';
import qs from 'qs';
import { httpDefaultOptsInterface } from '../interface';
import router from '../router';
import store from '../store';

axios.interceptors.request.use((config: any) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['token'] = token;
  }
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(res => {
  return res;
}, err => {
  const errorInfo = err.response;
  let { data, status } = errorInfo;
  if (status == 450 || status == 401) {
    return { data, status };
  }
  return Promise.reject(err);
});

const handleHeader = (opts: any) => {
  let defaultHeader;
  if (opts.header) {
    defaultHeader = opts.header;
  } else if (opts.method.toUpperCase() === 'GET') {
    defaultHeader = {
      'X-Request-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    };
  } else {
    defaultHeader = {
      'X-Request-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8'
    };
  }
  return defaultHeader;
};

const handleOptions = (opts: any, baseURL: any, data: any) => {
  let publicParams = {},
    defaultHeader = handleHeader(opts),
    httpDefaultOpts: httpDefaultOptsInterface = {
      method: opts.method,
      baseURL,
      url: opts.url,
      timeout: opts.timeout || 10000,
      headers: defaultHeader,
      responseType: opts.responseType || ''
    };

  if (opts.method.toUpperCase() === 'GET' || opts.method.toUpperCase() === 'DELETE') {
    httpDefaultOpts.params = Object.assign(publicParams, data);
  } else {
    httpDefaultOpts.data = handleParamData(defaultHeader, data);
  }
  return httpDefaultOpts;
};

const handleParamData = (defaultHeader: { [x: string]: string; }, data: any) => {
  return defaultHeader && defaultHeader['Content-Type'] === 'applicaation/x-www-form-urlencoded' ? qs.stringify(data) : data;
};

const isParamsValid = (params: any) => {
  return Boolean(params.method && params.url);
};

function axiosHttpUtils(opts: any, data?: any) {
  let baseURL = opts.baseURL || Constants.BASE_URL, promise;
  const httpDefaultOpts = handleOptions(opts, baseURL, data);

  promise = new Promise((resolve, reject) => {
    if (!isParamsValid(opts)) {
      return false;
    }
    axios(httpDefaultOpts).then(response => {
      const res = response.data;
      const { status } = response;
      if (res.code == 401) {
        // store.dispatch('logOut', router);
        router.push('/login');
        sessionStorage.clear();
        return;
      } else {
        resolve({ status, data: { ...res } });
      }
    }).catch(err => {

      reject(err);
    });
  });
  return promise;
}

export default axiosHttpUtils;
