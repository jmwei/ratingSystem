import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Home from '@/views/Home'
import Category from '@/views/Category'
import Personal from '@/views/Personal'
import List from '@/views/List'
import Details from '@/views/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        { path: '/home', component: Home},
        { path: '/category', component: Category},
        { path: '/personal', component: Personal},
        { path: '/list', component: List},
        { path: '/details', component: Details},
      ],
      redirect: '/home'
    }
  ]
})
