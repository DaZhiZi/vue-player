import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Rank from '@/components/rank/rank.vue'
import Singer from '@/components/singer/singer.vue'
import Recommend from '@/components/recommend/recommend.vue'
import Search from '@/components/search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
      },{
          path: '/singer',
          name: 'singer',
          component: Singer
      },{
          path: '/rank',
          name: 'rank',
          component: Rank
      },{
          path: '/search',
          name: 'search',
          component: Search
      }
  ]
})
