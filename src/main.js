import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import firebase from 'firebase'
import {config} from './helpers/firebaseConfig'


Vue.config.productionTip = false

Vue.component('HelloWorld', { /* ... */ })

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.$router.push('/auth')
      }
     });
    },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('auth')
  else next()
})
