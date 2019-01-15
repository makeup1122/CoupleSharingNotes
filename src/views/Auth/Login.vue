<!-- Login -->
<template>
  <div>
    <v-form>
      <v-text-field label="Username" v-model="username"></v-text-field>
      <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      <v-btn @click="onBtnLogin">Login</v-btn>
      <v-btn :to="{ name: 'Register' }">Register</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  created: function () {

  },
  components: {},
  computed: {},
  methods: {
    onBtnLogin: function () {
      const AV = this.$_AV
      AV.User.logIn(this.username, this.password).then(function (loggedInUser) {
        console.log(loggedInUser)
      }, function () {
      })
    }
  }
}
</script>
<style scoped>
</style>
