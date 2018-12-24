<!--  -->
<template>
  <div>
    <v-list>
      <template v-for="(item, index) in items">
        <v-list-tile :key="item.time">
           <v-list-tile-avatar>
            <v-icon class="">folder</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title style="width:30%">{{item.time}}</v-list-tile-title>
          <v-list-tile-sub-title style="width:30%">{{item.type}}</v-list-tile-sub-title>
          <v-list-tile-content>
            <v-list-tile-sub-title>30ml</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>access_time</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="item.time" v-if="index < (items.length-1)"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      items: [
        { time: '12:23', type: '母乳' },
        { time: '12:40', type: '奶粉' }
      ]
    }
  },
  created: function () {

  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
