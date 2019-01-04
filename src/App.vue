<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-flex>
      </v-layout>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      dialog: false
    }
  },
  mounted: function () {
  },
  methods: {
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
