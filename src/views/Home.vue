<!--  -->
<template>
  <div>
    <v-card :to="{ name: 'Baby' }" class="ma-2">
      <v-card-title class="title">Baby <span class="subheading font-weight-thin font-italic">({{parseInt(days)}}d)</span> </v-card-title>
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
      birthday: new Date('December 18, 2018 04:20:00')
    }
  },
  created: function () {},
  components: { BottomNav },
  computed: {
    days: function() {
      const now = Date.now()
      return (now - this.birthday) / (1000 * 60 * 60 * 24)
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
