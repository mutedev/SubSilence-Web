import React, { Fragment } from 'react'
import type RoleCategory from './interface'

const roles: RoleCategory[] = [
  // Administration Roles
  {
    title: 'Moderation',
    description: 'Roles for the staff of the Discord server',
    roles: [
      {
        name: '(⌐■_■) 🏵️ Administrator',
        description: 'For the administrators of the server',
        color: '#ffc796',
      },
      {
        name: '(⌐■_■) 🌻 Moderator',
        description: 'For the moderators of the server',
        color: '#f0ce70',
      },
    ],
  },

  // Display Roles
  {
    title: 'Display',
    description: 'Roles for people from special places',
    roles: [
      {
        name: '🎀 Server Booster 🎀',
        description: 'For the people who are Nitro boosting the server',
        color: '#f47fff',
      },
      {
        name: "💜 App's Haven",
        description: 'For people who come from the "App\'s Haven" server',
        color: '#71368a',
      },
      {
        name: "💗 Sente's Selected",
        description:
          'For people who come from the "Sentebo\'s Fwen Place" server or are friends of people in that server',
        color: '#f6cbff',
      },
      {
        name: '🌊 Bakje Woater',
        description: 'For people who come from the "Bakje Woater" server',
        color: '#3498db',
      },
      {
        name: '⚗️ Developer',
        description: 'For people who help develop Charmy#0307',
        color: '#90ffdc',
      },
      {
        name: '🎀 Blameless Brats',
        description: 'For people who are in the SubSilence Clan',
        color: '#e91e63',
      },
      {
        name: '🖤 Gang',
        description:
          'For people who come from the "Hentai Harem" server or any server with a close relation to it',
        color: '#727272',
      },
      {
        name: '🌷 Dutch Bastard',
        description: 'For native Dutch speakers',
        color: '#ffa000',
      },
      {
        name: '💜 Hugbox',
        description: 'Gives permission to speak in the Hugbox voice channel',
        color: '#e4acf7',
      },
      {
        name: '💘 The Reselected',
        description:
          'Gives permission to the hidden text channel. This role is usually granted for short amounts of time',
        color: '#e83030',
      },
      {
        name: '💦 Marvin',
        description:
          'Gives access to a private channel, this channel is related to a drama which happened a long time ago and is now rarely used',
        color: '#66cee6',
      },
      {
        name: '💒 Cabin Pass',
        description:
          'This person has been given access to the private voice channel',
        color: '#F66175',
      },
    ],
  },

  // Verification Roles
  {
    title: 'Verification',
    description: 'Roles to display verification status',
    roles: [
      {
        name: '(real) milkers',
        description: 'This person is a verified female',
        color: '#fff6c0',
      },
      {
        name: '💕 Trap',
        description:
          'A user with this role has access to the Traps NSFW channel',
        color: '#FFCAFF',
      },
      {
        name: '🎋 18+',
        description: 'This person proved to be 18+ years old',
        color: '#2ecc71',
      },
      {
        name: '🧬 18',
        description:
          'This person proved to be 18+ years old, but does not want/has not been given access to NSFW',
        color: '#2ECC71',
      },
      {
        name: '☑️ Verified Member',
        description:
          'This person has been given access to the server but has not yet been verified to be 18+',
        color: '#3498db',
      },
      {
        name: '🔰 Unverified Member',
        description: 'This person has not yet been given access to the server',
        color: '#f1c40f',
      },
    ],
  },

  // Punishment Roles
  {
    title: 'Punishment',
    description: 'Roles for members that have been punished',
    roles: [
      {
        name: 'Muted',
        description:
          "For people who's permission to send and view messages has been revoked (for a limited time)",
        color: '#36393e',
      },
    ],
  },

  // Custom Roles
  {
    title: 'Custom',
    description:
      'Custom roles you can receive from users, you can also request your own role',
    roles: [
      {
        name: '🌸  Flower',
        description: 'Flower bois',
        color: '#83405a',
      },
      {
        name: '💄 Femboy Army',
        description: "Myu's stamp",
        color: '#ff5cb4',
      },
      {
        name: "👿 Pug's Purgatory",
        description: 'For those who suffer',
        color: '#870202',
      },
    ],
  },
]

export default roles
