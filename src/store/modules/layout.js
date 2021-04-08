import * as types from '../mutation-types'

const state = {
  desktopLayout: null,
  globalDesktopLayout: null
}

const mutations = {
  [types.SET_DESKTOP_LAYOUT] (state, data) {
    state.desktopLayout = data
  },
  [types.SET_GLOBAL_DESKTOP_LAYOUT] (state, data) {
    state.globalDesktopLayout = data
  }
}

const getters = {
  desktopLayout: state => state.desktopLayout,
  globalDesktopLayout: state => state.globalDesktopLayout
}

const actions = {
  async getDesktopLayout ({dispatch, getters}) {
    return dispatch('fetch', {
      group: 'webex',
      type: 'desktopLayout',
      url: getters.endpoints.layout,
      showNotification: false,
      message: 'get agent desktop layout',
      mutation: types.SET_DESKTOP_LAYOUT
    })
  },
  async getGlobalDesktopLayout ({dispatch, getters}) {
    return dispatch('fetch', {
      group: 'webex',
      type: 'globalDesktopLayout',
      url: getters.endpoints.globalLayout,
      showNotification: false,
      message: 'get global desktop layout',
      mutation: types.SET_GLOBAL_DESKTOP_LAYOUT
    })
  },
  async updateDesktopLayout ({dispatch, getters}, body) {
    console.log('updateDesktopLayout', body)
    const response = await dispatch('fetch', {
      group: 'webex',
      type: 'desktopLayout',
      url: getters.endpoints.layout,
      showNotification: true,
      message: 'Update agent desktop layout',
      options: {
        method: 'PUT',
        body
      }
    })
    if (response instanceof Error) {
      // 
    } else{
      dispatch('getDesktopLayout')
    }
  },
}

module.exports = {
  actions,
  getters,
  state,
  mutations
}