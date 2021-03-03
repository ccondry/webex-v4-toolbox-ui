<template>
  <!-- Whatsapp -->
  <panel title="Whatsapp" aria-id="whatsapp">
    <p>
      Use the dCloud CC mobile app to place a call or start a chat
      before using the Whatsapp demo.
      <br>
      This will put your contact info into the database for the chat bot to
      identify you on Whatsapp.
      <br>
      This needs to be done again if you haven't used this demo for one
      week.
    </p>
    <p>
      Send "<strong>{{ whatsappJoinMessage }}</strong>" to
      <strong>{{ whatsappPhoneNumber }}</strong> using Whatsapp,
      or scan this QR code to do it automatically:
    </p>
    <div style="display: flex; justify-content: space-around;">
      <img :src="whatsappQrUrl" />
    </div>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      whatsappJoinMessage: 'join malachite-stork',
      whatsappPhoneNumber: '+1 (415) 523-8886',
      whatsappQrUrl: 'https://mm-static.cxdemo.net/whatsapp-qr.png'
    }
  }
}
</script>
