import React from 'react'
import CenterText from '../CenterText'
import type Props from './interface'

import './style.scss'

export default ({ url, version }: Props) => {
  return (
    <div className='Minecraft-Card'>
      <CenterText>
        <h1>Server IP</h1>
      </CenterText>
      <CenterText>
        <h2>{url}</h2>
      </CenterText>
      <CenterText>
        <h1>Server Version</h1>
      </CenterText>
      <CenterText>
        <h2>{version}</h2>
      </CenterText>
    </div>
  )
}
