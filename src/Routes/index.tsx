import React, { Fragment } from 'react'
import banner from '../assets/banner.png'
import type Routes from './interface'

// Import Pages
import Home from '../pages/Home'
import About from '../pages/About'
import DiscordRules from '../pages/Discord/Rules'
import Error404 from '../pages/Error404'

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
    path: '/about',
    component: About,
    header: {
      tab: 'About',
      title: (
        <Fragment>
          About <code>SubSilence</code>
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
