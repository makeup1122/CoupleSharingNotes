<!--  -->
<template>
  <div>
    <v-data-table
    hide-headers
    :items="items"
    hide-actions>
      <template slot="items" slot-scope="props">
        <tr  @click="props.expanded = !props.expanded">
          <td>
            <v-icon class="">folder</v-icon>
            {{props.item.createdAt.toLocaleTimeString('zh',{hour12: false,hour:'numeric',minute:'numeric',second: 'numeric'})}}
          </td>
          <td class="pa-1">{{props.item.attributes.type}}</td>
          <td class="pa-1">{{props.item.attributes.remark}}</td>
          <td class="pa-1"><v-btn icon><v-icon>access_time</v-icon></v-btn></td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-actions>
            <v-btn color="info" disabled><v-icon>edit</v-icon> 编辑</v-btn>
            <v-btn color="warning" @click="onBtnDeleteClick(props)"><v-icon>close</v-icon> 删除</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-data-table>
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
    onBtnDeleteClick: function (props) {
      var todo = this.$_AV.Object.createWithoutData(this.$options.name, props.item.id)
      todo.destroy().then((success) => {
        this.items.splice(props.index, 1)
      }, function (error) {
        // 删除失败
        console.log(error)
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
