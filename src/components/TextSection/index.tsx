import React from 'react'
import type Props from './interface'

import './style.scss'

export default ({ children }: Props) => {
  return <div className='Text-Section'>{children}</div>
}
