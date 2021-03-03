<template>
  <panel title="dCloud CC Mobile Web App Settings" aria-id="mobile-web-app">
    <p>
      Use this information to start the dCloud CC mobile web app demo.
    </p>
    <ul>
      <li>Datacenter: <strong>{{ datacenterDisplayName }}</strong></li>
      <li>Session: <strong>{{ sessionId }}</strong></li>
      <li>User ID: <strong>{{ jwtUser.id }}</strong></li>
    </ul>
  </panel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sessionId',
      'datacenterDisplayName',
      'jwtUser'
    ])
  }
}
</script>