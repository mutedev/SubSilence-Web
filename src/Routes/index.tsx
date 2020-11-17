import React, { Fragment } from 'react'
import banner from '../assets/banner.png'
import type Routes from './interface'

// Import other routes
import discord from './discord'

// Import Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Error404 from '../pages/Error404'

let routes: Routes[] = [
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
]

routes = [...routes, ...discord]

routes.push({
  path: '*',
  component: Error404,
  header: {
    tab: '404',
    title: <code>404</code>,
    banner: banner,
  },
},)

console.log(routes)

export default routes
