export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "欢迎来到我的博客园",
  "description": "记录我私人的博客",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://vuejs.org/images/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
