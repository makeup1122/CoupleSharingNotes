<!--  -->
<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CS-Notes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <!-- Link One -->
        </v-btn>
        <!-- <v-btn flat>
          Link Two
        </v-btn>
        <v-btn flat>
          Link Three
        </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense class="pt-0">
        <v-list-tile :to="{ name: 'HomePage' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'TopToolbar',
  components: {},
  data() {
    return {
      drawer: false
    }
  },
  created: function () {
  },
  methods: {
    logout: function () {
      this.$_AV.User.logOut()
      this.$router.push({ name: 'Login' })
      this.drawer = !this.drawer
    }
  }
}
</script>
