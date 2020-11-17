import React, { Fragment } from 'react'
import banner from '../assets/banner.png'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import DiscordRules from '../pages/Discord/Rules'
import type Routes from './interface'

const routes: Routes[] = [
  {
    path: '/',
    component: Home,
    header: {
      tab: 'Home',
      title: (
        <Fragment>
          Welcome to <code>SubSilence</code>
        </Fragment>
      ),
      banner: banner,
    },
  },
  {
    path: '/discord/rules',
    component: DiscordRules,
    header: {
      tab: 'Discord Rules',
      title: (
        <Fragment>
          Discord <code>Rules</code>
        </Fragment>
      ),
      banner: banner,
    },
  },
  {
    path: '*',
    component: Error404,
    header: {
      tab: '404',
      title: <code>404</code>,
      banner: banner,
    },
  },
]

export default routes
