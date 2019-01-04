<!--  -->
<template>
  <div>
    <v-card :to="{ name: 'Baby' }" class="ma-2">
      <v-card-title class="title">Baby</v-card-title>
    </v-card>
    <v-card  :to="{ name: 'Car' }" class="ma-2">
      <v-card-title class="title">Car</v-card-title>
    </v-card>
    <v-card  :to="{ name: 'GiftMoney' }" class="ma-2">
      <v-card-title class="title">Gift Money</v-card-title>
    </v-card>
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import BottomNav from '../components/BottomNav.vue'
export default {
  name: 'Home',
  data: function () {
    return {
    }
  },
  created: function () {},
  components: { BottomNav },
  computed: {},
  methods: {
  }
}
</script>
<style scoped>
</style>
