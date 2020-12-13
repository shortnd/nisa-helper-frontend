<template>
  <v-container>
    <h1>Teams</h1>
    <ul v-if="teams">
      <li v-for="team in teams" :key="team.id">
        <nuxt-link :to="`/teams/${team.id}`">
          {{ team.name }}
        </nuxt-link>
      </li>
    </ul>
    <div v-else>
      No Teams
    </div>
  </v-container>
</template>

<script lang="ts">
import { Team } from '~/api/teams'
export default {
  middleware: 'auth',
  asyncData ({ $api }) {
    const teams: Promise<Team[]> = $api.teams.index()
    return {
      teams
    }
  }
}
</script>
