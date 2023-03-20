/*
 * @Author: zhaojianhua
 * @Description: 
 * @Date: 2022-03-14 10:01:06
 * @LastEditTime: 2023-03-20 15:46:12
 * @FilePath: /vite_vue3_ts/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './' + dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[AntDesignVueResolver()]
    })
  ],
  base:"/",
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json', '.scss', '.less'],
    alias: {
      '@':resolve('src'),
    }
  }
})
