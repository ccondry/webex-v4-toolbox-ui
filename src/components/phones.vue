<template>
  <panel title="Phones" aria-id="phones">
    <div style="display: flex; flex-wrap: wrap;">
      <p>
        Your agents will need a Webex or Webex Calling app to receive
        voice calls on their extensions. Download one of them here:
      </p>
      <div>
        <a :href="links.webex" download>Webex</a>
      </div>
      <div>
        <a :href="links.windows" download>Webex Calling (Windows)</a>
      </div>
      <div>
        <a :href="links.mac" download>Webex Calling (Mac)</a>
      </div>
    </div>
  </panel>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  components: {
  },

  data () {
    return {
      links: {
        webex: 'https://www.webex.com/downloads.html/',
        windows: 'https://rialto.broadcloudpbx.com/btbc/mac/Webex_Calling.msi',
        mac: 'https://rialto.broadcloudpbx.com/btbc/mac/Webex_Calling.dmg'
      }
    }
  },
  computed: {
    ...mapGetters([
    ])
  }
}
</script>
