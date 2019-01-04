<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-flex>
        <v-flex v-if="showLoading">
          <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        </v-flex>
      </v-layout>
  </v-app>
</template>
<script>
// import BottomNav from './components/BottomNav.vue'
import { VueLoading } from 'vue-loading-template'
export default {
  name: 'App',
  components: { VueLoading },
  data: function () {
    return {
      dialog: false,
      showLoading: true
    }
  },
  mounted: function () {
    this.showLoading = false
  },
  methods: {
    saveHandle: function () {
      // ds
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
