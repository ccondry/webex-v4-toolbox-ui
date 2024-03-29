<template>
  <!-- full config details for user when using admin using switch-user -->
  <panel title="Admin" aria-id="admin" :open="false">
    <b-loading :active="isLoading || isWorking" :is-full-page="false" />
    <p>
      Manually enter this user's demo configuration, then click Save.
    </p>
    <!-- vertical -->
    <b-field label="Vertical ID">
      <b-input v-model="model.vertical" />
    </b-field>

    <!-- queue -->
    <b-field label="Provision Status">
      <b-input v-model="model.provision" />
    </b-field>

    <!-- chat template -->
    <b-field label="Chat Template ID">
      <b-input
      v-model="model.templateId"
      :placeholder="defaults.templateId"
      />
    </b-field>

    <!-- org -->
    <b-field label="Org ID">
      <b-input
      v-model="model.orgId"
      :placeholder="defaults.orgId"
      />
    </b-field>

    <!-- DC -->
    <b-field label="DC">
      <b-input
      v-model="model.DC"
      :placeholder="defaults.DC"
      />
    </b-field>

    <!-- app ID -->
    <b-field label="Cisco App ID">
      <b-input
      v-model="model.CiscoAppId"
      :placeholder="defaults.CiscoAppId"
      />
    </b-field>

    <!-- prefix -->
    <b-field label="App Prefix">
      <b-input
      v-model="model.appPrefix"
      :placeholder="defaults.appPrefix"
      />
    </b-field>

    <!-- async -->
    <b-field label="Async">
      <b-checkbox v-model="model.async" />
    </b-field>

    <!-- Save Button -->
    <b-field>
      <b-button
      type="is-success"
      :disabled="disableSave"
      rounded
      expanded
      @click="clickSave"
      >
        Save
      </b-button>
    </b-field>

    <!-- Delete Button -->
    <b-field>
      <b-button
      :disabled="working.user.provision"
      type="is-danger"
      rounded
      expanded
      @click.prevent="clickDeprovision"
      >
        Delete Account
      </b-button>
    </b-field>
  </panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      model: {}
    }
  },

  computed: {
    ...mapGetters([
      'defaults',
      'isAdmin',
      'isAdminSu',
      'userDemoConfig',
      'working',
      'loading',
      'jwtUser'
    ]),
    disableSave () {
      return false
    },
    isWorking () {
      return this.working.user.demoConfig
    },
    isLoading () {
      return this.loading.user.details
    }
  },

  watch: {
    userDemoConfig () {
      this.updateCache()
    }
  },

  mounted () {
    this.updateCache()
  },

  methods: {
    ...mapActions([
      'saveUserDemoConfig',
      'deprovisionUser'
    ]),
    clickDeprovision () {
      console.log('clickDeprovision')
      this.$buefy.dialog.confirm({
        title: 'Deprovision',
        message: `Are you sure you want to deprovision this Webex v5 user <strong>${this.jwtUser.username} (${this.jwtUser.id})</strong>?`,
        rounded: true,
        confirmText: 'Confirm',
        type: 'is-danger',
        onConfirm: () => {
          this.deprovisionUser()
        }
      })
    },
    clickSave () {
      const copy = JSON.parse(JSON.stringify(this.model))
      this.saveUserDemoConfig(copy)
    },
    updateCache () {
      this.model = JSON.parse(JSON.stringify(this.userDemoConfig))
    }
  }
}
</script>
