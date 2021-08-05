import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

export default () => {
  document.addEventListener('turbolinks:load', () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#vue-app')
  })
}
