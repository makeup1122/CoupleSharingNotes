<!--
 @Author: libing/makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-10-22 16:23:19"
-->
<template>
  <v-container>
    <v-btn color="secondary" small fab fixed bottom right @click="showSheet(true, {})"><v-icon>mdi-plus</v-icon></v-btn>
    <v-row>
      <v-col>
        <v-combobox placeholder="姓名" hide-details v-model="name" clearable solo :items="relativeOrigin" item-value="name" item-text="name"></v-combobox>
      </v-col>
    </v-row>
        <v-row>
          <v-col
            v-for="name in relative"
            :key="name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ name }}
                <v-spacer></v-spacer>
                <v-btn color="secondary" icon small @click="showSheet(true, { name })"><v-icon>mdi-plus</v-icon></v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="(item,index) in items.filter(e => e.name === name)" :key="index" @click="showSheet(true, item)">
                  <v-list-item-content>{{item.type}}：</v-list-item-content>
                  <v-list-item-content class="align-end">¥{{ item.amount }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
    <MoneyGiftForm v-model="sheet" :form-data="formData" @refresh="fetchData" />
  </v-container>
</template>
<script>
import MoneyGiftForm from '@/components/MoneyGiftForm.vue'
export default {
  name: 'GiftMoney',
  components: { MoneyGiftForm },
  data: function () {
    return {
      headers: [
        { text: '时间', value: 'createdAt', class: '', sortable: true },
        { text: '姓名', value: 'name', class: '', sortable: true },
        { text: '事项', value: 'type', class: '', sortable: true },
        { text: '金额', value: 'amount', class: '', sortable: true }
      ],
      items: [],
      loading: true,
      relativeOrigin: [],
      name: null,
      sheet: false,
      formData: {}
    }
  },
  computed: {
    relative () {
      if (!this.name) return this.relativeOrigin
      return this.relativeOrigin.filter(e => e.includes(this.name))
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    showSheet (val, data) {
      this.sheet = val
      this.formData = data
    },
    fetchData () {
      this.loading = true
      const AV = this.$_AV
      const query = new AV.Query('GiftMoney')
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
        this.relativeOrigin = Array.from(new Set(res.map(e => e.attributes.name)))
        this.loading = false
      })
    }
  }
}
</script>
<style scoped>
</style>
