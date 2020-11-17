import React, { Fragment } from 'react'
import type Routes from '../../Routes/interface'

import './style.scss'

export default ({ route }: { route: Routes }) => {
  const style = { background: route.header.color }

  const titleInit = 'SubSilence'
  const title: Element = document.querySelector('title') as Element
  title.innerHTML = route.header.tab
    ? `${route.header.tab} - ${titleInit}`
    : titleInit

  return (
    <Fragment>
      <header id='Header' style={style}>
        <img src={route.header.banner} />
      </header>
      <section id='Content'>
        <header id='Content-Header'>{route.header.title}</header>
        <section>
          <route.component />
        </section>
      </section>
      <footer id='Footer'>
        <code>&copy; SubSilence Network 2018 - 2020</code>
      </footer>
    </Fragment>
  )
}
