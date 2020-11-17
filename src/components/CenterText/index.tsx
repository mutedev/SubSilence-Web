import React from 'react'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  return <div className='CenterText'>{props.children}</div>
}
