/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2018/2/28
 * Time: 10:34
 */
import AreaPicker from './AreaPicker'

const areaPicker = {
  install (Vue, options) {
    Vue.component(AreaPicker.name, AreaPicker)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(areaPicker);
}

export default areaPicker
