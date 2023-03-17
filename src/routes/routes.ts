import HelloWorldVue from "@/components/HelloWorld.vue";



const routes = [
  { path: '/', component: HelloWorldVue},
  {
    path:'/index',
    name:'Index',
    component: ()=> import('@/views/main/index.vue'),
    children:[
      {
        path:'/home',
        name:"home",
        component:()=>import('@/views/pages/home/index.vue')
      },
      {
        path:'/system',
        name:"System",
        component:()=>import('@/views/pages/systemManager/index.vue'),
        children:[
          {
            path:'/role',
            name:"Role",
            component:()=>import('@/views/pages/systemManager/role/index.vue')
          },
          {
            path:'/user',
            name:"User",
            component:()=>import('@/views/pages/systemManager/user/index.vue')
          }
        ]
      }
    ]
  }
]

export default routes;