import React, { Fragment } from 'react'
import type RoleCategory from './interface'

const roles: RoleCategory[] = [
  // Administration Roles
  {
    title: (
      <Fragment>
        Moderation <code>Roles</code>
      </Fragment>
    ),
    description: 'Roles for the staff of the Discord server',
    roles: [
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🏵️ <code>Administrator</code>
          </Fragment>
        ),
        description: 'For the administrators of the server',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🌻 <code>Moderator</code>
          </Fragment>
        ),
        description: 'For the moderators of the server',
      },
    ],
  },

  // Display Roles
  {
    title: (
      <Fragment>
        Display <code>Roles</code>
      </Fragment>
    ),
    description: 'Roles for people from special places',
    roles: [
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 💜 <code>App's Haven</code>
          </Fragment>
        ),
        description: 'For people who come from the "App\'s Haven" server',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 💗 <code>Sente's Selected</code>
          </Fragment>
        ),
        description:
          'For people who come from the "Sentebo\'s Fwen Place" server or are friends of people in that server',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🌊 <code>Bakje Woater</code>
          </Fragment>
        ),
        description: 'For people who come from the "Bakje Woater" server',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> ⚗️ <code>Bot Developer</code>
          </Fragment>
        ),
        description: 'For people who help develop @Charmy#0307',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🎀 <code>Blameless Brats</code>
          </Fragment>
        ),
        description: 'For people who are in the SubSilence Clan',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🖤 <code>Gang</code>
          </Fragment>
        ),
        description:
          'For people who come from the "Hentai Harem" server or any server with a close relation to it',
      },
      {
        name: (
          <Fragment>
            <code>(⌐■_■)</code> 🌷 <code>Dutch Bastard</code>
          </Fragment>
        ),
        description: 'For native dutch speakers',
      },
    ],
  },

  // Verification Roles
  {
    title: (
      <Fragment>
        Verification <code>Roles</code>
      </Fragment>
    ),
    description: 'Roles for verified members',
    roles: [
      {
        name: (
          <Fragment>
            🏵️ <code>(real) milkers</code>
          </Fragment>
        ),
        description: 'This person is a verified female',
      },
      {
        name: (
          <Fragment>
            🎋 <code>18+</code>
          </Fragment>
        ),
        description: 'This person proved to be 18+ years old',
      },
      {
        name: (
          <Fragment>
            📔 <code>Access Pass</code>
          </Fragment>
        ),
        description:
          'This person has access to the private channels of the server',
      },
      {
        name: (
          <Fragment>
            ☑️ <code>Verified Member</code>
          </Fragment>
        ),
        description:
          'This person has been given access to the server but has not yet been verified to be 18+',
      },
      {
        name: (
          <Fragment>
            🔰 <code>Unverified Member</code>
          </Fragment>
        ),
        description: 'This person has not yet been given access to the server',
      },
    ],
  },

  // Punishment Roles
  {
    title: (
      <Fragment>
        Punishment <code>Roles</code>
      </Fragment>
    ),
    description: 'Roles for members that have been punished',
    roles: [
      {
        name: <code>muted</code>,
        description:
          "For people who's permission to send and view messages has been revoked (for a limited time)",
      },
    ],
  },

  // Custom Roles
  {
    title: (
      <Fragment>
        Custom <code>Roles</code>
      </Fragment>
    ),
    description: 'Custom roles for people who requested them',
    roles: [],
  },
]

export default roles
