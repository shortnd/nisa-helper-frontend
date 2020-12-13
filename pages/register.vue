<template>
  <v-container>
    <v-card>
      <v-card-title>Register</v-card-title>
      <v-form method="POST" @submit.prevent="register">
        <v-card-text>
          <v-text-field
            v-model="user.name"
            type="text"
            label="Name"
            prepend-icon="mdi-account"
          />
          <v-text-field
            v-model="user.email"
            type="email"
            label="Email"
            prepend-icon="mdi-email"
          />
          <v-text-field
            v-model="user.password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            v-model="user.password_confirmation"
            :type="showPasswordConfirmation ? 'text' : 'password'"
            label="Confirm Password"
            prepend-icon="mdi-lock"
            :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPasswordConfirmation = !showPasswordConfirmation"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="primary">
            Register
          </v-btn>
          <v-spacer />
          <v-btn link to="/login">
            Login
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <!-- <h2>Register</h2> -->
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['guest'],
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    showPassword: false,
    showPasswordConfirmation: false,
    errorsObject: {}
  }),
  methods: {
    async register () {
      try {
        await this.$axios.$get('/laravel/sanctum/csrf-cookie')
        await this.$axios.$post('/laravel/register', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>
