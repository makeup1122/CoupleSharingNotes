<!--
 @Author: libing/makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-10-22 16:18:04"
-->
<template>
  <v-app>
    <DefaultHeader @nav-icon-click="leftNavDrawer = !leftNavDrawer"/>
    <DefaultNav v-model="leftNavDrawer"/>
    <v-main>
      <!-- <v-container fluid> -->
      <!-- If using vue-router -->
        <router-view></router-view>
      <!-- </v-container> -->
    </v-main>
    <DefaultFooter/>
  </v-app>
</template>
<script>
import DefaultHeader from './Header'
import DefaultFooter from './Footer'
import DefaultNav from './Nav'
export default {
  name: 'Layout',
  components: {
    DefaultHeader,
    DefaultNav,
    DefaultFooter
  },
  data: function () {
    return {
      leftNavDrawer: true
    }
  },
  computed: {},
  created: function () {
  },
  methods: {}
}
</script>
<style scoped>
</style>
