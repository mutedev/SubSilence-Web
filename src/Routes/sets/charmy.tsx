import React, { Fragment } from 'react'
import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Charmy from '../../pages/Charmy/Main'
import CharmyCommands from '../../pages/Charmy/Commands'

const routes: Routes[] = [
  {
    path: '/charmy',
    component: Charmy,
    header: {
      tab: 'Charmy',
      title: (
        <Fragment>
          Meet <code>Charmy</code>
        </Fragment>
      ),
      banner: banner
    }
  },
  {
    path: '/charmy/commands',
    component: CharmyCommands,
    header: {
      tab: 'Charmy',
      title: (
        <Fragment>
          <code>Charmy</code> Commands
        </Fragment>
      ),
      banner: banner
    }
  },
  {
    path: '/charmy/commands/:url',
    component: CharmyCommands,
    header: {
      tab: 'Charmy',
      title: (
        <Fragment>
          <code>Charmy</code> Commands
        </Fragment>
      ),
      banner: banner
    }
  }
]

export default routes
