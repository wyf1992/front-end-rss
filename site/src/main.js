// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@vant/touch-emulator'
import { Search, Icon, Popup, Cell, CellGroup, Tag, Divider } from 'vant'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(infiniteScroll).use(Search).use(Icon).use(Popup).use(Cell).use(CellGroup).use(Tag).use(Divider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
