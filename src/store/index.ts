import { createStore, Store } from 'vuex';
import state from './state';
import mutations from "./mutations";
import actions from "./actions";



const store: Store<{}> = createStore({
  state,
  mutations,
  actions,
})

export default store