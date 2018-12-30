<!-- BottomNav -->
<template>
  <v-bottom-nav fixed :value="true" color="primary">
    <v-btn @click="onBtnHome" dark class="" value="home">
      <span>首页</span>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn @click.prevent="onBtnAdd" dark value="add">
      <span>添加</span>
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn @click="onBtnSettings" dark value="settings">
      <span>管理</span>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data: function () {
    return {
      bottomNav: 'home'
    }
  },
  created: function () {

  },
  components: {},
  computed: {},
  methods: {
    onBtnHome: function () {
      this.$router.push({ name: 'Home' })
    },
    onBtnAdd: function () {
      this.$emit('addClick')
    },
    onBtnSettings: function () {
      this.$emit('settingsClick')
    }
  }
}
</script>
<style scoped>
</style>
