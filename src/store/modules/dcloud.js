import * as types from '../mutation-types'
import {addUrlQueryParams} from '../../utils'

const state = {
  // list of demo verticals
  verticals: [],
  // the base configuration for this demo
  // demoBaseConfig: {},
  // dcloud session ID and datacenter information
  instance: {},
  datacenterNames: {
    'RTP': 'US East',
    'SJC': 'US West',
    'LON': 'EMEAR',
    'SNG': 'APJ'
  },
  vpnMap: {
    'RTP': 'vpn.cc1.dc-01.com',
    'SNG': 'vpn.cc1.dc-02.com',
    'LON': 'vpn.cc1.dc-03.com',
    'SJC': 'vpn.cc1.dc-05.com'
  }
}

const mutations = {
  [types.SET_VERTICALS] (state, data) {
    state.verticals = data
  },
  // [types.SET_DEMO_BASE_CONFIG] (state, data) {
  //   state.demoBaseConfig = data[0]
  // },
  [types.SET_INSTANCE] (state, data) {
    console.log('SET_INSTANCE', data)
    state.instance = data[0]
  }
}

const getters = {
  urlDatacenter: (state, getters) => {
    // return the datacenter according to the browser URL
    if (getters.isProduction) {
      // get current hostname of the browser location
      const hostname = window.location.hostname
      // get the subdomain
      const subdomain = hostname.split('.').shift()
      // get the datacenter part
      const datacenter = subdomain.split('-').pop().toUpperCase()
      return datacenter
    } else {
      // use RTP when in development
      return 'RTP'
    }
  },
  caCertUrl: () => 'https://mm-static.cxdemo.net/dcloud-root-ca.crt',
  datacenter: state => state.instance.datacenter,
  sessionId: state => state.instance.session,
  datacenterDisplayName: (state, getters) => {
    return state.datacenterNames[getters.datacenter]
  },
  // is this demo locked to disable provisioning?
  isLocked: () => {
    return false
    // return getters.demoBaseConfig.locked === true
  },
  // which vertical the demo website is set to 
  verticals: state => state.verticals,
  // the customer-side demo website link
  brandDemoLink (state, getters) {
    try {
      return addUrlQueryParams('https://mm-brand.cxdemo.net', {
        session: getters.sessionId,
        datacenter: getters.datacenter,
        userId: getters.jwtUser.id
      })
    } catch (e) {
      return null
    }
  },
  // the base demo configuration for this instant demo
  // demoBaseConfig: state => state.demoBaseConfig,
  // the instant demo instance information, like session ID and datacenter
  instance: state => state.instance,
  // the RDP workstation info
  rdpAddress: (state, getters) => {
    return `${getters.rdpFqdn} (${getters.rdpIp})`
  },
  rdpIp: () => {
    return '198.18.134.210'
  },
  rdpFqdn: () => {
    return 'rdp.dcloud.cisco.com'
  },
  // the VPN address
  vpnAddress: (state, getters) => {
    return state.vpnMap[getters.datacenter]
  }
}

const actions = {
  // getDemoBaseConfig ({dispatch, getters}) {
  //   dispatch('fetch', {
  //     group: 'dcloud',
  //     type: 'demoBaseConfig',
  //     url: getters.endpoints.demoBaseConfig,
  //     options: {
  //       query: {
  //         demo: 'webex',
  //         version: 'v4prod',
  //         instant: true
  //       }
  //     },
  //     mutation: types.SET_DEMO_BASE_CONFIG,
  //     message: 'get demo base config'
  //   })
  // },
  getVerticals ({dispatch, getters}) {
    dispatch('fetch', {
      group: 'dcloud',
      type: 'verticals',
      url: getters.endpoints.vertical,
      options: {
        query: {
          all: true,
          summary: true
        }
      },
      mutation: types.SET_VERTICALS,
      message: 'get verticals list'
    })
  },
  async getInstance ({dispatch, getters}) {
    // get instant demo instance information, for the session ID and datacenter
    dispatch('fetch', {
      group: 'dcloud',
      type: 'instance',
      url: getters.endpoints.instance,
      options: {
        query: {
          datacenter: getters.urlDatacenter,
          demo: 'webex',
          version: 'v4prod'
        }
      },
      mutation: types.SET_INSTANCE,
      message: 'get dCloud session/instance information'
    })
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
