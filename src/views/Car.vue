<!-- Car -->
<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="items"
    hide-actions>
    <template slot="items" slot-scope="props">
      <tr  @click="props.expanded = !props.expanded">
        <td>{{ props.item.createdAt.toLocaleDateString() }} {{props.item.createdAt.toLocaleTimeString('zh',{hour12: false,hour:'numeric',minute:'numeric'})}}</td>
        <td class="pa-1">{{ props.item.attributes.mileage }}km</td>
        <td class="pa-1">¥{{ props.item.attributes.unitPrice }}</td>
        <td class="pa-1">¥{{ props.item.attributes.totalPrice }}</td>
        <td class="pa-1">{{ props.item.attributes.liter }}L</td>
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
      <v-form class="pa-4">
        <v-text-field type="number" outline v-model="formData.unitPrice" label="单价" autofocus></v-text-field>
        <v-text-field type="number" outline v-model="formData.liter" label="油量"></v-text-field>
        <v-text-field type="number" outline v-model="formData.totalPrice" label="总价"></v-text-field>
        <v-text-field type="number" outline v-model="formData.mileage" label="公里数"></v-text-field>
        <v-btn block color="primary" large @click="onBtnAddSubbmit">添加</v-btn>
      </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
export default {
  name: 'GasStation',
  components: { BottomNav },
  data: function () {
    return {
      headers: [
        { text: '时间', value: 'createdAt', class: '' },
        { text: '公里数', value: 'mileage', class: 'pa-1' },
        { text: '单价', value: 'unitPrice', class: 'pa-1' },
        { text: '总价', value: 'totalPrice', class: 'pa-1' },
        { text: '油量(升)', value: 'liter', class: 'pa-1' }
      ],
      items: [],
      formData: {},
      dialog: false
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
      // query.notEqualTo('type', '')
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
    onBtnAddSubbmit: function () {
      const RecordObject = this.$_AV.Object.extend(this.$options.name)
      const record = new RecordObject()
      record.set('mileage', this.formData.mileage)
      record.set('unitPrice', this.formData.unitPrice)
      record.set('totalPrice', this.formData.totalPrice)
      record.set('liter', this.formData.liter)
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
