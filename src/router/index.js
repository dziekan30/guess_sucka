import Vue from 'vue' 
import VueRouter from 'vue-router'
import GuessIndex from '../views/GuessIndex.vue'
import UI from '../views/UI.vue' 


Vue.use(VueRouter)

const routes = [
  // {path: '/', name: "root", component: GuessIndex},
  {path: '/guess', name: "guess-index", component: GuessIndex},
  {path: '/', name: 'ui-index', component: UI}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
