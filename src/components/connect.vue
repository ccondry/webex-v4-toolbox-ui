<template>
  <panel title="Agent Connection" aria-id="connect">
    <div style="display: flex; flex-wrap: wrap;">
      <!-- VPN -->
      <vpn />
      
      <!-- Workstation -->
      <workstation />
    </div>
  </panel>
</template>

<script>
import Workstation from './workstation'
import Vpn from './vpn'

export default {
  components: {
    Workstation,
    Vpn
  }
}
</script>