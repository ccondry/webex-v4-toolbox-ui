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
          <a :href="agentPortalUrl" target="_blank">
            {{ agentPortalUrl }}
          </a>
        </strong>
        <copy :value="agentPortalUrl" name="Agent Desktop URL" />
      </p>

      <!-- control hub URL -->
      <p
      v-if="['Administrator'].includes(agent.role)"
      style="white-space: nowrap;"
      >
        <strong>
          Control Hub:
          <a :href="webexAdminPortalUrl" target="_blank">
            {{ webexAdminPortalUrl }}
          </a>
        </strong>
        <copy :value="webexAdminPortalUrl" name="Control Hub URL" />
      </p>

      <!-- mangement portal URL -->
      <p
      v-if="['Supervisor', 'Administrator'].includes(agent.role)"
      style="white-space: nowrap; "
      >
        <strong
        style="display: inline-block"
        >
          Management Portal:
          <a
          :href="cjpAdminPortalUrl"
          target="_blank"
          >
          <span
          style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 24rem; vertical-align: top;"
          >
            {{ cjpAdminPortalUrl }}
          </span>
          </a>
        </strong>
        <copy :value="cjpAdminPortalUrl" name="Management Portal URL" />
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
      'agentPortalUrl',
      'webexAdminPortalUrl',
      'cjpAdminPortalUrl'
    ])
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