<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card :to="{ name: 'Audio'}">
          <v-card-title>讲故事</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card :to="{ name: 'MoneyGift' }">
          <v-card-title>Money</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
