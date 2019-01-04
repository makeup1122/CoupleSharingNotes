<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <transition name="bounce">
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
