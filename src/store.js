
// import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

import auth from '@/modules/auth/store'
import user from '@/modules/user/store'
import local from '@/modules/local/store'

import dashboard from '@/modules/dashboard/store'
import notification from '@/modules/notification/store'

import task from '@/modules/task/store'
import device from '@/modules/device/store'
import resource from '@/modules/resource/store'

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    user,
    task,
    device,
    dashboard,
    notification,
    resource,
    local
  }
  // plugins: [createPersistedState({
  //   reducer(state) {
  //     // No need to use let as the reducer itself can be immutable which do not mean that the properties
  //     // are not mutable (https://ponyfoo.com/articles/var-let-const)
  //     const reducer = Object.assign({}, state)
  //     // state which you don't want to persist.
  //     // https://github.com/robinvdvleuten/vuex-persistedstate/issues/4
  //     delete reducer.local

  //     return reducer
  //   }
  // })]
})
