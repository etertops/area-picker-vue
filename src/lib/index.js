/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2018/2/28
 * Time: 10:34
 */
import VueDistpicker from './VueDistpicker'

const distPicker = {
  install (Vue, options) {
    Vue.component(VueDistpicker.name, VueDistpicker)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(distPicker);
}

export default distPicker
