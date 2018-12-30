<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <router-view></router-view>
        </v-flex>
      </v-layout>
  </v-app>
</template>
<script>
// import BottomNav from './components/BottomNav.vue'
export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      dialog: false
    }
  },
  methods: {
    saveHandle: function () {
      // ds
    }
  }
}
</script>
