<template>
  <v-container>
    <v-card>
      <v-card-title>Login</v-card-title>
      <form method="POST" @submit.prevent="login">
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
          />
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" type="submit">
            Login
          </v-btn>
          <v-spacer />
          <v-btn link to="/register">
            Register
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['guest'],
  data: () => ({
    email: '',
    password: '',
    showPass: false
  }),
  methods: {
    login () {
      // this.$axios.$get('/sanctum/csrf-cookie').then(() => {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      // })
    }
  }
})
</script>
