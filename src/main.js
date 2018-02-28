import Vue from 'vue'
import App from './App.vue'
import VueDistpicker from './lib'
Vue.use(VueDistpicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
