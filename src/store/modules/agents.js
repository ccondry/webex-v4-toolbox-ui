// public web path for agent photos
const imageFolder = 'https://mm.cxdemo.net/static/images/cumulus/common'

const state = {
  loginDomain: 'cc1.dc-01.com'
}

const getters = {
  agents: (state, getters) => {
    return [
      {
        picture: imageFolder + '/sandra.png',
        username: 'sjeffers' + getters.jwtUser.id + '@' + state.loginDomain,
        password: 'C1sco12345',
        extension: '80' + getters.jwtUser.id,
        name: 'Sandra Jefferson',
        role: 'Agent',
        description: 'Agent'
      },
      {
        picture: imageFolder + '/rick.png',
        username: 'rbarrows' + getters.jwtUser.id + '@' + state.loginDomain,
        password: 'C1sco12345',
        extension: '82' + getters.jwtUser.id,
        name: 'Rick Barrows',
        role: 'Supervisor',
        description: 'Administrator / Supervisor'
      }
    ]
  }
}

export default {
  getters,
  state
}
