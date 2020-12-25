import React from 'react'
import CenterText from '../CenterText'
import type Props from './interface'

import './style.scss'

export default ({ children }: Props) => {
  return <div className='Card'>{children}</div>
}
