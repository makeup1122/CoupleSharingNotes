// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

const opts = {
  iconfont: 'mdi', // default - only for display purposes
  theme: {
    themes: {
      dark: false,
      light: {
        primary: colors.cyan,
        secondary: colors.purple
      }
    },
    options: {
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value)
      }
    }
  }
}

export default new Vuetify(opts)
