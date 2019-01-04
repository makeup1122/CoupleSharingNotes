<!-- Car -->
<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="items"
    must-sort
    hide-actions>
    <template slot="items" slot-scope="props">
      <tr  @click="props.expanded = !props.expanded">
        <td class="">{{ props.item.createdAt.toLocaleDateString() }} {{props.item.createdAt.toLocaleTimeString('zh',{hour12: false,hour:'numeric',minute:'numeric'})}}</td>
        <td class="">{{ props.item.name }}</td>
        <td class=""><span :class="typeColorClass(props.item.type)">{{ props.item.type }}</span></td>
        <td class="">¥{{ props.item.amount }}</td>
        <td class="">{{ props.item.remark }}</td>
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
        <v-text-field type="text" outline prepend-icon="person" v-model="formData.name" label="姓名" autofocus></v-text-field>
        <v-combobox outline prepend-icon="category"
          :items="['生子','结婚','其他']"
          v-model="formData.type"
          label="事项"
        ></v-combobox>
        <v-text-field type="number" outline prepend-icon="attach_money" v-model="formData.amount" label="金额"></v-text-field>
        <v-textarea outline prepend-icon="bookmarks" v-model="formData.remark" label="备注"></v-textarea>
        <v-btn block color="primary" large @click="onBtnAddSubbmit">添加</v-btn>
      </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
export default {
  name: 'GiftMoney',
  components: { BottomNav },
  data: function () {
    return {
      headers: [
        { text: '时间', value: 'createdAt', class: '', sortable: true },
        { text: '姓名', value: 'name', class: '', sortable: true },
        { text: '事项', value: 'type', class: '', sortable: true },
        { text: '金额', value: 'amount', class: '', sortable: true },
        { text: '备注', value: 'remark', class: '', sortable: false }
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
    typeColorClass: function (type) {
      switch (type) {
        case '结婚':
          return 'red--text'
        case '生子':
          return 'blue--text'
        case '其他':
          return 'green--text'
        default:
          break
      }
    },
    onBtnAddClick: function () {
      this.dialog = !this.dialog
    },
    fetchData: function () {
      const AV = this.$_AV
      const query = new AV.Query(this.$options.name)
      query.find().then(res => {
        this.items = res.map(e => {
          return {
            name: e.attributes.name,
            type: e.attributes.type,
            amount: e.attributes.amount,
            remark: e.attributes.remark,
            createdAt: e.createdAt,
            id: e.id
          }
        })
        // this.items = res
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
      record.set('name', this.formData.name)
      record.set('type', this.formData.type)
      record.set('amount', this.formData.amount)
      record.set('remark', this.formData.remark)
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
