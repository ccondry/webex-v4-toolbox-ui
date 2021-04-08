<template>
  <panel title="Desktop Layout" aria-id="desktop-layout">
    <p>
      Download your existing desktop layout JSON, modify it, then upload it
      to change your agent desktop layout.
    </p>
    <div style="position: relative;">
      <b-loading :is-full-page="false" :active="isLoading || isWorking" />
      <!-- download current -->
      <b-field>
        <b-button
        tag="a"
        :download="globalDesktopLayout.attributes.jsonFileName__s"
        rounded
        type="is-primary"
        expanded
        :href="globalDesktopLayoutFileData"
        icon-left="download"
        >
          <!-- Download Default Layout -->
          Download the Default Layout
          <!-- {{ globalDesktopLayout.attributes.jsonFileName__s }} -->
        </b-button>
      </b-field>

      <!-- download current -->
      <b-field>
        <b-button
        tag="a"
        :download="desktopLayout.attributes.jsonFileName__s"
        rounded
        type="is-primary"
        expanded
        :href="fileData"
        icon-left="download"
        >
          Download Your Layout
          <!-- {{ desktopLayout.attributes.jsonFileName__s }} -->
        </b-button>
      </b-field>

      <!-- upload -->
      <b-field>
        <b-button
        rounded
        type="is-success"
        expanded
        icon-left="upload"
        @click="clickUpload"
        >
          Upload new desktop layout JSON file
        </b-button>
      </b-field>
    </div>
    <!-- Hidden File Uploader -->
    <input
    type="file"
    style="display:none"
    ref="file"
    accept="application/json;text/json"
    @change="onFilePicked"
    >
  </panel>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      file: null
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'working',
      'desktopLayout',
      'globalDesktopLayout'
    ]),
    isLoading () {
      return this.loading.webex.desktopLayout
    },
    isWorking () {
      return this.working.webex.desktopLayout
    },
    fileData () {
      return this.generateFileData(this.desktopLayout.attributes.jsonFileContent__s)
    },
    globalDesktopLayoutFileData () {
      return this.generateFileData(this.globalDesktopLayout.attributes.jsonFileContent__s)
    }
  },

  mounted () {
    this.getDesktopLayout()
    this.getGlobalDesktopLayout()
  },

  methods: {
    ...mapActions([
      'getDesktopLayout',
      'updateDesktopLayout',
      'getGlobalDesktopLayout'
    ]),
    generateFileData (content) {
      try {
        return `data:application/json;charset=utf-8,${encodeURIComponent(content)}`
      } catch (e) {
        return null
      }
    },
    clickUpload () {
      this.$refs.file.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      // let filename = files[0].name
      const fileReader = new FileReader()
      // load the file and set up the callback function
      fileReader.addEventListener('load', async () => {
        try {
          const parts = fileReader.result.split(';')
          const mime = parts[0].split(':').pop()
          // validate MIME type is JSON or text
          if (['application/json', 'text/json', 'text/plain'].includes(mime)) {
            // valid MIME type
            const dataParts = parts[1].split(',')
            const encoding = dataParts[0]
            const data = dataParts[1]
            if (encoding === 'base64') {
              // convert data from base64 to ascii, then send it
              const ascii = atob(data)
              const json = JSON.parse(ascii)
              this.$buefy.dialog.confirm({
                message: 'Are you sure you want to replace your desktop layout?',
                rounded: true,
                confirmText: 'Yes',
                type: 'is-success',
                onConfirm: () => {
                  // send to REST
                  this.updateDesktopLayout(json)
                }
              })
            } else {
              console.log('encoding type is', encoding)
            }
          } else {
            // invalid MIME type
            this.$buefy.toast.open({
              message: `The file you provided is type ${mime} but needs to be application/json, text/json, or text/plain.`,
              type: 'is-warning'
            })
          }
        } catch (e) {
          console.log('error reading or uploading file:', e)
        } finally {
          // reset selected file so user could select the same file again
          this.$refs.file.value = null
        }
      })
      // read the file now (callback will be called)
      fileReader.readAsDataURL(files[0])
      // set the selected file
      this.file = files[0]
    }
  }
}
</script>
