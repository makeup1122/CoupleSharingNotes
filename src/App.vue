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
        <v-btn>母乳</v-btn>
        <v-btn>奶粉</v-btn>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      dialog: false
    }
  }
}
</script>
