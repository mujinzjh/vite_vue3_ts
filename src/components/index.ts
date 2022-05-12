import Pagination from './Pagination.vue';

const comps = [
  Pagination
]

export default {
  install(Vue: any) {
    comps.forEach(item => {
      Vue.component(item.name, item);
    })
  }
};