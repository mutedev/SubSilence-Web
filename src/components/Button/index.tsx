import React from 'react'
import { useHistory } from 'react-router-dom'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const history = useHistory()

  const onButtonClick = () => {
    if (props.onClick) {
      props.onClick()
    } else if (props.to) {
      if (props.to[0] === '/') {
        history.push(props.to)
      } else {
        const a = document.createElement('a')
        a.href = props.to
        a.click()
      }
    } else {
      console.error('Button has no actions')
    }
  }

  return (
    <button
      className={`Button${props.center ? '-Center' : ''}`}
      onClick={onButtonClick}
    >
      {props.children}
    </button>
  )
}
