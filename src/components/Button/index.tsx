import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const history = useHistory()
  let type: 'button' | 'link-internal' | 'link-external' = 'button'
  let element

  if (props.to) {
    if (props.to[0] === '/') {
      type = 'link-internal'
    } else {
      type = 'link-external'
    }
  }

  const button = (
    <button
      className={`Button${props.center ? '-Center' : ''}`}
      onClick={props.onClick && props.onClick}
    >
      {props.children}
    </button>
  )

  if (type === 'button') {
    return button
  } else if (type === 'link-internal' && props.to) {
    return (
      <Link
        className={`Button-Link${props.center ? '-Center' : ''}`}
        to={props.to}
      >
        {button}
      </Link>
    )
  } else {
    return (
      <a
        className={`Button-Link${props.center ? '-Center' : ''}`}
        href={props.to}
      >
        {button}
      </a>
    )
  }
}
