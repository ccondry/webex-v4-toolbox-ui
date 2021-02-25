<template>
  <panel title="Agents and Supervisor" aria-id="agents">
    <div style="display: flex; flex-wrap: wrap;">
      <agent :agent="sandra" />
      <agent :agent="rick" />
      <agent :agent="admin" />
    </div>
  </panel>
</template>


<script>
import {mapGetters} from 'vuex'
import Agent from './agent'

export default {
  components: {
    Agent
  },

  data () {
    return {
      imageFolder: 'https://mm.cxdemo.net/static/images/cumulus/common',
      loginDomain: 'cc1.dc-01.com'
    }
  },

  computed: {
    ...mapGetters([
      'jwtUser'
    ]),
    sandra () {
      return {
        picture: this.imageFolder + '/sandra.png',
        username: 'sjeffers' + this.jwtUser.id + '@' + this.loginDomain,
        password: 'C1sco12345',
        extension: '80' + this.jwtUser.id,
        name: 'Sandra Jefferson',
        role: 'Agent',
        description: 'Agent'
      }
    },
    rick () {
      return {
        picture: this.imageFolder + '/rick.png',
        username: 'rbarrows' + this.jwtUser.id + '@' + this.loginDomain,
        password: 'C1sco12345',
        extension: '82' + this.jwtUser.id,
        name: 'Rick Barrows',
        role: 'Supervisor',
        description: 'Supervisor'
      }
    },
    admin () {
      return {
        picture: this.imageFolder + '/helen.png',
        username: 'dcloud-wxcc.gen@cisco.com',
        password: 'C1sco12345',
        name: 'dCloud Webex CC Administrator',
        role: 'Administrator',
        description: 'Administrator'
      }
    }
  }
}
</script>
