<template>
  <v-app dark>
    <v-app-bar fixed app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mx-auto">Nisa Helper</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer"
    fixed
    app>
      <v-list>
        <v-list-item to="/" exact router>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-action-text>
            Home
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>
