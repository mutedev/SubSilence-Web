import React, { Fragment } from 'react'
import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import main pages
import Home from '../../pages/Home'
import About from '../../pages/About'

// Import other routes
import discord from '../sets/discord'
import charmy from '../sets/charmy'

// Import error pages
import Error404 from '../../pages/Error/404'
import Error403 from '../../pages/Error/403'

let routes: Routes[] = [
  // Main routes
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
      banner: banner
    }
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
      banner: banner
    }
  },

  // Imported routes
  ...discord,
  ...charmy,

  // Errors
  {
    path: '/error/403',
    component: Error403,
    header: {
      tab: '403',
      title: <code>403</code>,
      banner: banner
    }
  },
  {
    path: '*',
    component: Error404,
    header: {
      tab: '404',
      title: <code>404</code>,
      banner: banner
    }
  }
]

export default routes
