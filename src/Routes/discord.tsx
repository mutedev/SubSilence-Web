import React, { Fragment } from 'react'
import type { Route } from 'react-router-dom'
import banner from '../assets/banner.png'
import type Routes from './interface'

// Import pages
import Discord from '../pages/Discord/Main'
import DiscordRules from '../pages/Discord/Rules'
import DiscordStaff from '../pages/Discord/Staff'
import DiscordPartners from '../pages/Discord/Partners'
import DiscordRoles from '../pages/Discord/Roles'

const routes: Routes[] = [
  {
    path: '/discord',
    component: Discord,
    header: {
      tab: 'Discord',
      title: (
        <Fragment>
          SubSilence <code>Discord</code>
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
    path: '/discord/staff',
    component: DiscordStaff,
    header: {
      tab: 'Discord Staff',
      title: (
        <Fragment>
          Discord <code>Staff</code>
        </Fragment>
      ),
      banner: banner,
    },
  },
  {
    path: '/discord/partners',
    component: DiscordPartners,
    header: {
      tab: 'Discord Partners',
      title: (
        <Fragment>
          Discord <code>Partners</code>
        </Fragment>
      ),
      banner: banner,
    },
  },
    {
        path: '/discord/roles',
        component: DiscordRoles,
        header: {
          tab: 'Discord Roles',
          title: (
            <Fragment>
              Discord <code>Roles</code>
            </Fragment>
          ),
          banner: banner,
        },
    },
]

export default routes
