<!-- AddDialog -->
<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout wrap align-center justify-center text-xs-center>
        <v-flex xs6 v-for="item in typeArray" :key="item.type"><v-btn large fab @click="onBtnClick(item.type)">{{item.type}}</v-btn></v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  props: {
    propsDialog: {
      default: false,
      type: Boolean
    }
  },
  data: function () {
    return {
      dialog: this.propsDialog,
      typeArray: [
        { type: '母乳' },
        { type: '奶粉' },
        { type: '睡觉' },
        { type: '排泄' }
      ]
    }
  },
  watch: {
    propsDialog: function (newValue, oldValue) {
      this.dialog = newValue
    },
    dialog: function (newValue, oldValue) {
      this.$emit('update:propsDialog', newValue)
    }
  },
  created: function () {
  },
  components: {},
  computed: {},
  methods: {
    onBtnClick: function (type) {
      const RecordObject = this.$_AV.Object.extend('record')
      const record = new RecordObject()
      record.set('type', type)
      record.save().then(todo => {
        this.dialog = false
        // this.$emit('fetchData')
      })
    }
  }
}
</script>
<style scoped>
</style>
