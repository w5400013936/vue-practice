import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/news'
import It from '../components/It'
import Keji from '../components/keji.vue'
import Book from '../components/book.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:News
    },
    {
      path:'/it',
      component:It
    },
    {
      path:'/keji',
      component:Keji
    },
    {
      path:'/book',
      component:Book
    }
  ]
})
