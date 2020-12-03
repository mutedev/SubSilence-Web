import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const history = useHistory()

  return (
    <button
      className={`Button${props.center ? '-Center' : ''}`}
      onClick={
        props.onClick ? props.onClick : () => history.push(props.to || '/')
      }
    >
      {props.children}
    </button>
  )
}
