import React from 'react'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const button = (
    <button
      className={`Button${props.center ? '-Center' : ''}`}
      onClick={props.onClick && props.onClick}
    >
      {props.children}
    </button>
  )

  return props.to ? (
    <a
      className={`Button-Link${props.center ? '-Center' : ''}`}
      href={props.to}
    >
      {button}
    </a>
  ) : (
    button
  )
}
