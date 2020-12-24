import React, { Fragment } from 'react'
import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Minecraft from '../../pages/Minecraft/Main'

const routes: Routes[] = [
  {
    path: '/minecraft',
    component: Minecraft,
    header: {
      tab: 'Minecraft',
      title: (
        <Fragment>
          SubSilence <code>Minecraft</code>
        </Fragment>
      ),
      banner: banner
    }
  }
]

export default routes
