<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <transition name="slide-left">
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

</style>
