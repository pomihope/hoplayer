import Vue from 'vue'
import Router from 'vue-router'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/'
    },
    {
      path: ':uid',
      name: 'room',
      component: Room,
      props: true
    }
  ]
})
