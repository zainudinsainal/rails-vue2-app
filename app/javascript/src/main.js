import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueI18n from 'vue-i18n'
import vuetify from '@/plugins/vuetify'
import CompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(CompositionApi)
Vue.use(VueI18n)

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#vue-app')
  })
}
