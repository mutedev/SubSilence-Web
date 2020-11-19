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
        name: "(⌐■_■) 💜 App's Haven",
        description: 'For people who come from the "App\'s Haven" server',
        color: '#71368a',
      },
      {
        name: "(⌐■_■) 💗 Sente's Selected",
        description:
          'For people who come from the "Sentebo\'s Fwen Place" server or are friends of people in that server',
        color: '#f6cbff',
      },
      {
        name: '(⌐■_■) 🌊 Bakje Woater',
        description: 'For people who come from the "Bakje Woater" server',
        color: '#3498db',
      },
      {
        name: '(⌐■_■) ⚗️ Bot Developer',
        description: 'For people who help develop Charmy#0307',
        color: '#90ffdc',
      },
      {
        name: '(⌐■_■) 🎀 Blameless Brats',
        description: 'For people who are in the SubSilence Clan',
        color: '#e91e63',
      },
      {
        name: '(⌐■_■) 🖤 Gang',
        description:
          'For people who come from the "Hentai Harem" server or any server with a close relation to it',
        color: '#1c1c1c',
      },
      {
        name: '(⌐■_■) 🌷 Dutch Bastard',
        description: 'For native Dutch speakers',
        color: '#a84300',
      },
    ],
  },

  // Verification Roles
  {
    title: 'Verification',
    description: 'Roles for verified members',
    roles: [
      {
        name: '🏵️ (real) milkers',
        description: 'This person is a verified female',
        color: '#',
      },
      {
        name: '🎋 18+',
        description: 'This person proved to be 18+ years old',
        color: '#',
      },
      {
        name: '📔 Access Pass',
        description:
          'This person has access to the private channels of the server',
        color: '#',
      },
      {
        name: '☑️ Verified Member',
        description:
          'This person has been given access to the server but has not yet been verified to be 18+',
        color: '#',
      },
      {
        name: '🔰 Unverified Member',
        description: 'This person has not yet been given access to the server',
        color: '#',
      },
    ],
  },

  // Punishment Roles
  {
    title: 'Punishment',
    description: 'Roles for members that have been punished',
    roles: [
      {
        name: 'muted',
        description:
          "For people who's permission to send and view messages has been revoked (for a limited time)",
        color: '#36393e',
      },
    ],
  },

  // Custom Roles
  {
    title: 'Custom',
    description: 'Custom roles for people who requested them',
    roles: [],
  },
]

export default roles
