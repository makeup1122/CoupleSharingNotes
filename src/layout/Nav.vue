<!--
 @Author: libing/makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-10-22 16:29:40"
-->
<template>
  <v-navigation-drawer app clipped :value="value" @input="updateStatus">
    <v-img :src="require('@/assets/day31-sweet-home.png')"></v-img>
    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item,index) in menus"
          :key="index"
          link
          :to="{ name: item.name }"
        >
          <!-- <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon> -->
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data: function () {
    return {
      menus: [
        { name: 'Audio', title: '讲故事' },
        { name: 'MoneyGift', title: 'Money' }
      ]
    }
  },
  computed: {},
  created: function () {
  },
  methods: {
    updateStatus (val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style scoped>
</style>
