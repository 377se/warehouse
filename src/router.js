import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', 
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    { path: '/auth', name:'auth', component: Auth },
    { path: '/success', component: AuthSuccess }
  ]
})
