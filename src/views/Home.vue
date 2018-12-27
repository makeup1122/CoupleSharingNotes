<!--  -->
<template>
  <div>
    <v-list>
      <template v-for="(item, index) in items">
        <v-list-tile :key="item.id">
           <v-list-tile-avatar>
            <v-icon class="">folder</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title style="width:20%">{{item.createdAt.toLocaleTimeString('zh',{hour12: false,hour:'numeric',minute:'numeric'})}}</v-list-tile-title>
          <v-list-tile-sub-title style="width:20%">{{item.attributes.type}}</v-list-tile-sub-title>
          <v-list-tile-content>
            <v-list-tile-sub-title>{{item.attributes.remark}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>access_time</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="item.cid" v-if="index < (items.length-1)"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      items: []
    }
  },
  created: function () {
    console.log('Enter created func of Home')
    this.fetchData()
  },
  components: {},
  computed: {},
  methods: {
    fetchData: function () {
      console.log('AV')
      const AV = this.$_AV
      const query = new AV.Query('record')
      query.notEqualTo('type', '')
      query.find().then(res => {
        console.log('execute query')
        this.items = res
      })
    }
  }
}
</script>
<style scoped>
</style>
