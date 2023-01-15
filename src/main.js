import { createApp, VueElement } from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import Vue from 'vue'

createApp(App).use(store).use(router).mount('#app')

Vue.use(Vuelidate)


Vue.filter('date', dateFilter)
