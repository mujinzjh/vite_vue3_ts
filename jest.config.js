/*
 * @Author: mujin
 * @Date: 2022-03-15 09:41:01
 * @LastEditTime: 2022-03-15 09:46:18
 * @Description: 
 */
module.exports = {
  transform: {
    // .vue文件用vue-jest处理
    '^.+\\.vue$': 'vue-jest',
    // .js或者.jsx使用babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    // ts文件使用ts-jest处理
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)']
}