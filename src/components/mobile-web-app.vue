<template>
  <panel title="dCloud CC Mobile Web App Settings" aria-id="mobile-web-app">
    <p>
      Use
      <strong><a :href="url" target="_blank">this URL</a></strong>
      <copy :value="url" name="Mobile Web App URL" />
      or the following QR code to go to the dCloud CC Mobile Web App:
      <center><vue-qr :text="url" :logoSrc="favicon" /></center>
    </p>
  </panel>
</template>

<script>
import { mapGetters } from 'vuex'
import { addUrlQueryParams } from '../utils'
import VueQr from 'vue-qr'
import favicon from '../assets/images/favicon.png'
 
export default {
  components: {
    VueQr
  },

  data () {
    return {
      favicon
    }
  },

  computed: {
    ...mapGetters([
      'sessionId',
      'datacenter',
      'jwtUser'
    ]),
    url () {
      const url = 'https://mc.cxdemo.net/'
      const query = {
        datacenter: this.datacenter,
        sessionId: this.sessionId,
        userId: this.jwtUser.id,
        username: this.jwtUser.firstName + ' ' + this.jwtUser.lastName
      }
      return addUrlQueryParams(url, query)
    }
  }
}
</script>