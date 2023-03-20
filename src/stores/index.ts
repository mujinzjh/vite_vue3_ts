/*
 * @Author: zhaojianhua
 * @Description:
 * @Date: 2023-03-17 17:22:28
 * @LastEditTime: 2023-03-17 17:26:38
 * @FilePath: /vite_vue3_ts/src/stores/index.ts
 */
import { useToken } from "./login";
const state = {
  useToken: useToken(),
};

export default state;
