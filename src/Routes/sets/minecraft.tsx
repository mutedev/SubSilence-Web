import React, { Fragment } from 'react'
import banner from '../../assets/banner.png'
import type { Routes } from '../interface'

// Import pages
import Minecraft from '../../pages/Minecraft/Main'
import MinecraftRules from '../../pages/Minecraft/Rules'
import MinecraftMap from '../../pages/Minecraft/Map'

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
  },
  {
    path: '/minecraft/rules',
    component: MinecraftRules,
    header: {
      tab: 'Minecraft',
      title: (
        <Fragment>
          Minecraft <code>Rules</code>
        </Fragment>
      ),
      banner: banner
    }
  },
  {
    path: '/minecraft/map',
    component: MinecraftMap,
    header: {
      tab: 'Minecraft',
      title: (
        <Fragment>
          Minecraft <code>Map</code>
        </Fragment>
      ),
      banner: banner
    }
  }
]

export default routes
