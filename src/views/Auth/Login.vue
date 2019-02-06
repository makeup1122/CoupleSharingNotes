<!-- Login -->
<template>
  <div>
    <v-form class="pa-2">
      <v-text-field label="Username" v-model="username"></v-text-field>
      <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      <v-btn :loading="loading" @click="onBtnLogin">Login</v-btn>
      <!-- <v-btn :to="{ name: 'Register' }">Register</v-btn> -->
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  created: function () {

  },
  components: {},
  computed: {},
  methods: {
    onBtnLogin: function () {
      const that = this
      this.loading = true
      const AV = this.$_AV
      AV.User.logIn(this.username, this.password).then(function (loggedInUser) {
        // console.log(loggedInUser.getUsername())
        that.$router.push({ name: 'HomePage' })
      }, function () {
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style scoped>
</style>
