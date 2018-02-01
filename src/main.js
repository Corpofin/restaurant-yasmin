// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}

import { store } from './store/store'

// import 'quasar-extras/animate'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/ionicons'
import 'quasar-extras/material-icons'

import * as VueGoogleMaps from 'vue2-google-maps'
import Quasar from 'quasar'
import router from './router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Quasar) // Install Quasar Framework
Vue.use(Vuex)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBuLE0a2oN-c7WJZfINQxtLOGJTwNfaBxQ',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  store,
  render: h => h(require('./App').default)
})
