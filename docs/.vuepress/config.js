/*
 * @Author: mujin
 * @Date: 2022-03-15 13:44:52
 * @LastEditTime: 2022-03-15 15:50:55
 * @Description: 
 */
module.exports = {
  //站点配置
  lang: 'en-US',
  title: '欢迎来到我的博客园',
  description: '记录我私人的博客',
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],

  //主题配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebar: 'auto',
    nav: [{ text: "主页", link: "/" },
    { text: "node", link: "/node/" },
    ],
    logo: 'https://vuejs.org/images/logo.png',
  }
}