import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import state from '@/stores';
import Constants from '@/Constants';
import {message} from 'ant-design-vue'
class axiosHttpUtil {
  baseUrl: string;
  queue;
  constructor(baseUrl: string){
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  /**
   * @description 返回默认配置信息
   * @returns 
   */
  getDefaultConfig():AxiosRequestConfig{
    const config:AxiosRequestConfig = {
      baseURL: this.baseUrl,
      timeout: 60000,
    };
    return config;
  }
  destroy(url:string|undefined){
    url && delete this.queue[url];
  }
  interceptors(instance:AxiosInstance, url:string|undefined){
    // 请求拦截
    instance.interceptors.request.use(config=>{
      config.headers.ticket = state.useToken.token || '';
      return config;
    },err=>{
      return Promise.reject(err);
    });
    // 响应拦截
    instance.interceptors.response.use(res=>{
      this.destroy(url);
      const {status,data} = res;
      if (Constants.expireStatus.includes(status)) {
        //退出登录
        message.error('This is an error message');
      }
      return {status,data};
    },err=>{
      this.destroy(url);
      let errInfo = err.response;
      errInfo && Promise.reject(errInfo);
      if (!errInfo) {
        const {request:{status}} = err;
        return {data:{code: 500, message:'',},status}
      } else {
        let {status,data} = errInfo;
        if (Constants.expireStatus.includes(status)) {
          // 退出登录
          message.error('This is an error message');
          return;
        }
        return {status, data};
      }
    });
  }
  /**
   * @description 请求方法
   * @param options axios配置的请求参数
   * @returns
   */
  request(options:AxiosRequestConfig){
    options.url = this.baseUrl + options.url;
    const instance:AxiosInstance = axios.create();
    options = Object.assign(this.getDefaultConfig(),options);
    this.interceptors(instance,options.url)
    return instance(options);
  }
}

export default axiosHttpUtil;
