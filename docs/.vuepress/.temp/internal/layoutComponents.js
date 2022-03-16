import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/zhaojianhua/Desktop/study/vue/vue3/vite_vue3_ts/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/zhaojianhua/Desktop/study/vue/vue3/vite_vue3_ts/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
