<template>
  <v-app>
    <!-- <v-container fluid class="pa-0"> -->
      <v-layout column>
        <v-flex>
          <router-view></router-view>
        </v-flex>
        <v-flex>
          <v-bottom-nav fixed :value="true">
            <v-btn @click="dialog = true">
              <span>添加</span>
              <v-icon>add</v-icon>
            </v-btn>
          </v-bottom-nav>
        </v-flex>
      </v-layout>
    <!-- </v-container> -->
    <add-dialog :propsDialog.sync="dialog"></add-dialog>
  </v-app>
</template>
<script>
import AddDialog from './components/AddDialog.vue'
export default {
  name: 'App',
  components: { AddDialog },
  data: function () {
    return {
      dialog: false
    }
  },
  methods: {
    saveHandle: function (type) {
      // ds
    }
  }
}
</script>
