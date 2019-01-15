<!-- Register by password&username -->
<template>
  <v-form>
    <v-text-field label="Username" v-model="username"></v-text-field>
    <v-text-field label="Password" v-model="password"></v-text-field>
    <v-text-field type="email" label="Email" v-model="email"></v-text-field>
    <v-btn @click="onBtnRegister">Register</v-btn>
    <v-btn :to="{ name: 'Login' }">Login</v-btn>
  </v-form>
</template>
<script>
export default {
  name: 'Register',
  data: function () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  created: function () {
  },
  components: {},
  computed: {},
  methods: {
    onBtnRegister: function () {
      const AV = this.$_AV
      // 新建 AVUser 对象实例
      var user = new AV.User()
      // 设置用户名
      user.setUsername(this.username)
      // 设置密码
      user.setPassword(this.password)
      // 设置邮箱
      user.setEmail(this.email)
      user.signUp().then(function (loggedInUser) {
        console.log(loggedInUser)
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
</style>
