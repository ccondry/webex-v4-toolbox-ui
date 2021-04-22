<template>
  <panel title="Desktop Layout" aria-id="desktop-layout">
    <div style="display: flex; flex-wrap: wrap;">
      <!-- Layout -->
      <layout />
      
      <!-- Logo Image -->
      <logo />
    </div>
  </panel>
</template>

<script>
import Layout from './layout'
import Logo from './logo'

export default {
  components: {
    Layout,
    Logo
  }
}
</script>