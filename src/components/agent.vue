<template>
  <div class="tile is-parent">
    <article
    class="tile is-child box"
    style="border: 1px solid rgb(204, 204, 204);"
    >
      <!-- name -->
      <p class="title" style="white-space:nowrap">
        {{ agent.name }}
      </p>

      <!-- description -->
      <p class="subtitle">
        {{ agent.description }}
      </p>

      <!-- picture -->
      <img :src="agent.picture" style="width: 128px; height: 128px;">

      <!-- multiple webex usernames -->
      <p
      v-if="Array.isArray(agent.username)"
      >
        <span
        v-for="(username, key) of agent.username"
        :key="key"
        style="white-space: nowrap; display: block;"
        >
          <strong>
            Webex Username:
            {{ username }}
          </strong>
          <copy :value="username" name="Webex Username" />
        </span>
      </p>

      <!-- single webex username -->
      <p
      v-else
      style="white-space: nowrap;"
      >
        <strong>
          Webex Username:
          {{ agent.username }}
        </strong>
        <copy :value="agent.username" name="Webex Username" />
      </p>

      <!-- rdp username -->
      <p
      v-if="['Agent', 'Supervisor'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          RDP Username:
          {{ agent.rdpUsername }}
        </strong>
        <copy :value="agent.rdpUsername" name="RDP Username" />
      </p>

      <!-- password -->
      <p>
        <strong>
          Password:
          {{ agent.password }}
        </strong>
        <copy :value="agent.password" name="Password" />
      </p>
      
      <!-- extension -->
      <p
      v-if="['Agent', 'Supervisor'].includes(agent.role)"
      >
        <strong>
          Extension:
          {{ agent.extension }}
        </strong>
        <copy :value="agent.extension" name="Extension" />
      </p>

      <!-- agent desktop URL -->
      <p
      v-if="['Agent', 'Supervisor'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Agent Desktop:
          <span v-show="isLoading">Loading...</span>
          <a
          v-show="agentPortalUrl.length > 0"
          :href="agentPortalUrl"
          target="_blank"
          >
            {{ agentPortalUrl }}
          </a>
        </strong>
        <copy
        v-show="agentPortalUrl.length > 0"
        :value="agentPortalUrl"
        name="Agent Desktop URL"
        />
      </p>

      <!-- salesforce login -->
      <p
      v-if="['Agent'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Salesforce Login: sjeffers@cc1.dc-01.com
        </strong>
        <copy value="sjeffers@cc1.dc-01.com" name="Salesforce Login" />
      </p>

      <!-- salesforce password -->
      <p
      v-if="['Agent'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Salesforce Password: C1sco12345!
        </strong>
        <copy value="C1sco12345!" name="Salesforce Password" />
      </p>

      <!-- agent salesforce desktop URL -->
      <p
      v-if="['Agent'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Salesforce Desktop:
          <span v-show="isLoading">Loading...</span>
          <a
          v-show="salesforceUrl.length > 0"
          :href="salesforceUrl"
          target="_blank"
          >
            {{ salesforceUrl }}
          </a>
        </strong>
        <copy
        v-show="salesforceUrl.length > 0"
        :value="salesforceUrl"
        name="Salesforce Desktop URL"
        />
      </p>

      <!-- control hub URL -->
      <p
      v-if="['Administrator'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Control Hub:
          <span v-show="isLoading">Loading...</span>
          <a
          v-show="webexAdminPortalUrl.length > 0"
          target="_blank"
          >
            {{ webexAdminPortalUrl }}
          </a>
        </strong>
        <copy
        v-show="webexAdminPortalUrl.length > 0"
        :value="webexAdminPortalUrl"
        name="Control Hub URL"
        />
      </p>

      <!-- superivsor mangement portal URL -->
      <p
      v-if="['Supervisor'].includes(agent.role)"
      style="white-space: nowrap; "
      >
        <strong
        style="display: inline-block"
        >
          Management Portal:
          <span v-show="isLoading">Loading...</span>
          <a
          v-show="cjpAdminPortalUrl.length > 0"
          :href="cjpAdminPortalUrl"
          target="_blank"
          >
            <span
            style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 24rem; vertical-align: top;"
            >
              {{ cjpAdminPortalUrl }}
            </span>
          </a>
        </strong>
        <copy
        v-show="cjpAdminPortalUrl.length > 0"
        :value="cjpAdminPortalUrl"
        name="Management Portal URL"
        />
      </p>

      <!-- admin mangement portal URL -->
      <p
      v-if="['Administrator'].includes(agent.role)"
      style="white-space: nowrap; "
      >
        <strong
        style="display: inline-block"
        >
          Management Portal:
          <span v-show="isLoading">Loading...</span>
          <a
          v-show="adminManagementPortalUrl.length > 0"
          :href="adminManagementPortalUrl"
          target="_blank"
          >
            <span
            style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 24rem; vertical-align: top;"
            >
              {{ adminManagementPortalUrl }}
            </span>
          </a>
        </strong>
        <copy
        v-show="adminManagementPortalUrl.length > 0"
        :value="adminManagementPortalUrl"
        name="Management Portal URL"
        />
      </p>
    </article>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    agent: {
      required: true,
      type: Object
    }
  },

  computed: {
    ...mapGetters([
      'demoInfo',
      'loading'
    ]),
    isLoading () {
      return this.loading.dcloud.demo
    },
    salesforceUrl () {
      return 'https://login.salesforce.com'
    },
    agentPortalUrl () {
      try {
        return this.demoInfo.links.agentPortal
      } catch (e) {
        return ''
      }
    },
    cjpAdminPortalUrl () {
      try {
        return this.demoInfo.links.managementPortal.trim()
      } catch (e) {
        return ''
      }
    },
    adminManagementPortalUrl () {
      try {
        return this.demoInfo.links.adminManagementPortal
      } catch (e) {
        return 'Loading...'
      }
    },
    webexAdminPortalUrl () {
      try {
        return this.demoInfo.links.controlHub
      } catch (e) {
        return ''
      }
    }
  },
  
  methods: {
    ...mapActions([
      'copyToClipboard'
    ]),
    clickCopy (string, type) {
      this.copyToClipboard({string, type})
    }
  }
}
</script>