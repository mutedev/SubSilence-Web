import React, { Fragment, useEffect } from 'react'
import type { Routes } from '../../Routes/interface'

import './style.scss'

export default ({ route }: { route: Routes }) => {
  const style = { background: route.header.color }

  const titleInit = 'SubSilence'
  const title: Element = document.querySelector('title') as Element
  title.innerHTML = route.header.tab
    ? `${route.header.tab} - ${titleInit}`
    : titleInit

  useEffect(() => {
    const header = document.getElementById('Content-Header') as HTMLElement
    let title = route.header.title as string

    title = title.replaceAll('[', '<code>')
    title = title.replaceAll(']', '</code>')

    header.innerHTML = title
  }, [])

  return (
    <Fragment>
      <header id='Header' style={style}>
        <img src={route.header.banner} />
      </header>
      <section id='Content'>
        <header id='Content-Header' />
        <section id='Content-Section'>
          <route.component />
        </section>
      </section>
      <footer id='Footer'>
        <code>&copy; SubSilence Network 2018 - 2020</code>
      </footer>
    </Fragment>
  )
}
