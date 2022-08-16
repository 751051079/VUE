import { createStore } from 'vuex'

import {IRootStore} from './rootStoreTypes'

const store = createStore<IRootStore>({
    state() {
      return {
        isHeader: true,
      };
    },
    mutations:{
      setHeaderStatus(state,status){
        state.isHeader = status
      }
    }
  });
  
  export default store;