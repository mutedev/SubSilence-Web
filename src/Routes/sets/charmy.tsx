import React, { Fragment } from 'react'
import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Charmy from '../../pages/Charmy/Main'

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
  }
]

export default routes
