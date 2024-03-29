import { createRouter, createWebHistory } from 'vue-router'

import SuperLeagueEventLayout from '~/components/layouts/SuperLeagueEventLayout.vue'
import SuperLeagueStandingsLayout from '~/components/layouts/SuperLeagueStandingsLayout.vue'
import AdventureView from '~/views/AdventureView.vue'
import AuthView from '~/views/AuthView.vue'
import DashboardView from '~/views/DashboardView.vue'
import LevelsView from '~/views/LevelsView.vue'
import LevelView from '~/views/LevelView.vue'
import SettingsView from '~/views/SettingsView.vue'
import SuperLeagueSeasonView from '~/views/SuperLeagueSeasonView.vue'
import SuperLeagueView from '~/views/SuperLeagueView.vue'
import UsersView from '~/views/UsersView.vue'
import UserView from '~/views/UserView.vue'
import WorkshopView from '~/views/WorkshopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/adventure',
      name: 'adventure',
      component: AdventureView
    },
    {
      path: '/levels',
      name: 'levels',
      component: LevelsView
    },
    {
      path: '/level/:id',
      name: 'level',
      component: LevelView
    },
    {
      path: '/workshop/:id',
      name: 'workshop',
      component: WorkshopView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/user/:steamId',
      name: 'user',
      component: UserView
    },
    {
      path: '/super-league',
      name: 'super-league',
      component: SuperLeagueView
    },
    {
      path: '/super-league/:season',
      name: 'super-league-season',
      component: SuperLeagueSeasonView,
      children: [
        {
          path: '',
          name: 'super-league-standings',
          component: SuperLeagueStandingsLayout
        },
        {
          path: ':event',
          name: 'super-league-event',
          component: SuperLeagueEventLayout
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    }
  ]
})

export default router
