/*
 * @Author: zhaojianhua
 * @Description: 
 * @Date: 2023-03-17 16:54:53
 * @LastEditTime: 2023-03-17 16:56:02
 * @FilePath: /vite_vue3_ts/src/service/request.ts
 */
import axiosHttpUtil from "./axiosHttpUtil";

const baseURL = process.env.NODE_ENV === 'production' ? '' : '/api';
const axios  = new axiosHttpUtil(baseURL);
export default axios;