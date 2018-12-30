<!--  -->
<template>
  <div>
    <v-list style="margin-bottom:100px;">
      <template v-for="(item, index) in items">
        <v-list-tile :key="item.id">
           <v-list-tile-avatar>
            <v-icon class="">folder</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title style="width:25%">{{item.createdAt.toLocaleTimeString('zh',{hour12: false,hour:'numeric',minute:'numeric',second: 'numeric'})}}</v-list-tile-title>
          <v-list-tile-sub-title style="width:20%">{{item.attributes.type}}</v-list-tile-sub-title>
          <v-list-tile-content>
            <v-list-tile-sub-title>{{item.attributes.remark}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon><v-icon>access_time</v-icon></v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="item.cid" v-if="index < (items.length-1)"></v-divider>
      </template>
    </v-list>
    <bottom-nav v-on:addClick="onBtnAddClick"></bottom-nav>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>添加</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <!-- <v-btn dark flat @click="dialog = false">Save</v-btn> -->
          </v-toolbar-items>
        </v-toolbar>
        <v-layout wrap align-center justify-center text-xs-center class="pa-4">
          <v-flex class="pa-2" xs6 v-for="item in typeArray" :key="item.type"><v-btn large fab @click="onBtnAddSubbmit(item.type)">{{item.type}}</v-btn></v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import BottomNav from '../components/BottomNav.vue'
export default {
  name: 'BabyStation',
  components: { BottomNav },
  data: function () {
    return {
      items: [],
      dialog: false,
      typeArray: [
        { type: '母乳' },
        { type: '奶粉' },
        { type: '睡觉' },
        { type: '排泄' }
      ]
    }
  },
  created: function () {
    this.fetchData()
  },
  computed: {},
  methods: {
    onBtnAddClick: function () {
      this.dialog = !this.dialog
    },
    fetchData: function () {
      const AV = this.$_AV
      const query = new AV.Query(this.$options.name)
      query.notEqualTo('type', '')
      query.find().then(res => {
        this.items = res
      })
    },
    onBtnAddSubbmit: function (type) {
      const RecordObject = this.$_AV.Object.extend(this.$options.name)
      const record = new RecordObject()
      record.set('type', type)
      record.save().then((todo) => {
        this.fetchData()
        this.dialog = false
      })
    }
  }
}
</script>
<style scoped>
</style>
