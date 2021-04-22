<template>
  <panel title="Mobile App" aria-id="mobile-app">
    <div style="display: flex; flex-wrap: wrap;">
      <!-- Web App -->
      <div class="tile is-parent">
        <article
        class="tile is-child box"
        style="border: 1px solid rgb(204, 204, 204);"
        >
          <p class="title" style="white-space:nowrap">
            Web App (no install)
          </p>
          <p>
            Use
            <strong><a :href="mobileWebAppUrl" target="_blank">this URL</a></strong>
            <copy :value="mobileWebAppUrl" name="Mobile Web App URL" />
            or the following QR code to go to the dCloud CC Mobile Web App:
            <center><vue-qr :text="mobileWebAppUrl" :logo-src="favicon" /></center>
          </p>
        </article>
      </div>
      
      <!-- Mobile App -->
      <div class="tile is-parent">
        <article
        class="tile is-child box"
        style="border: 1px solid rgb(204, 204, 204);"
        >
          <p class="title" style="white-space:nowrap">
            Mobile App (installed on iOS or Android)
          </p>
          <p>
            Use this information to start the dCloud CC mobile app demo.
          </p>
          <p>
            The pod ID needs to be entered into the Settings screen.
          </p>
          <p>
            Please note that the SMS is not able to route to Webex CC agents yet, so
            please do not use that feature for this demo.
          </p>
          <ul>
            <li>Session: <strong>{{ sessionId }}</strong></li>
            <li>Datacenter: <strong>{{ datacenterDisplayName }}</strong></li>
            <li>Pod ID: <strong>{{ jwtUser.id }}</strong></li>
          </ul>
        </article>
      </div>
    </div>
  </panel>
</template>

<script>
import { mapGetters } from 'vuex'
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
      'mobileWebAppUrl',
      'datacenterDisplayName',
      'jwtUser'
    ])
  }
}
</script>