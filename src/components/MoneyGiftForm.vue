<!--
 @Author: libing/makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-10-22 18:37:15"
-->
<template>
  <v-bottom-sheet :value="value" @input="updateSheet">
    <v-card>
      <v-toolbar class="primary">
        <v-btn dark icon @click="updateSheet(false)"><v-icon>mdi-close</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn dark icon @click="onSubmit"><v-icon>mdi-check</v-icon></v-btn>
      </v-toolbar>
      <v-card-text class="mt-5 pt-5">
      <v-form>
        <v-text-field prepend-icon="mdi-clock" v-if="item.createdAt" :value="item.createdAt.toLocaleString()" label="时间" disabled></v-text-field>
        <v-text-field v-model="item.name" label="名字" prepend-icon="mdi-account"></v-text-field>
         <v-combobox outline prepend-icon="mdi-shape" :items="['生子','结婚','其他']" small-chips hint="事项可以自定义输入" persistent-hint v-model="item.type" label="事项"></v-combobox>
        <v-text-field type="number" outline prepend-icon="mdi-cash" v-model="item.amount" label="金额"></v-text-field>
        <v-textarea outline prepend-icon="mdi-bookmark" v-model="item.remark" rows="2" label="备注"></v-textarea>
      </v-form>
      </v-card-text>
      <!-- <v-card-actions v-if="item.id">
        <v-btn @click="onDelete"><v-icon>mdi-delete</v-icon>删除</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-bottom-sheet>
</template>
<script>
const ObjectName = 'GiftMoney'
export default {
  name: 'MoneyGiftForm',
  components: {},
  props: {
    formData: {
      type: Object
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      item: {}
    }
  },
  watch: {
    formData: function (newVal, oldVal) {
      this.item = newVal
    }
  },
  computed: {},
  created: function () {
  },
  methods: {
    updateSheet (val) {
      this.$emit('input', val)
    },
    onDelete: function () {
      var todo = this.$_AV.Object.createWithoutData(ObjectName, this.item.id)
      todo.destroy().then((success) => {
        this.$emit('refresh')
        this.updateSheet(false)
      }, function (error) {
        // 删除失败
        console.log(error)
      })
    },
    onSubmit: function () {
      let record = null
      if (this.item.id) {
        record = this.$_AV.Object.createWithoutData(ObjectName, this.item.id)
      } else {
        const RecordObject = this.$_AV.Object.extend(ObjectName)
        record = new RecordObject()
      }
      record.set('name', this.item.name)
      record.set('type', this.item.type)
      record.set('amount', this.item.amount)
      record.set('remark', this.item.remark)
      record.save().then((todo) => {
        this.$emit('refresh')
        this.updateSheet(false)
      })
    }
  }
}
</script>
<style scoped>
</style>
