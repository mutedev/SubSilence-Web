import React, { useEffect, useState } from 'react'
import CenterText from '../CenterText'
import type Props from './interface'

import './style.scss'

export default ({ partner, width }: Props) => {
  const widthStyle = { width }

  const [img, setImg] = useState('')

  useEffect(() => {
    setImg(partner.img)
  }, [img])

  return (
    <div className='Partner-Card' style={widthStyle}>
      <div className='Partner-Card-Img'>
        <img src={img} alt={`${partner.name} their profile picture`} />
      </div>
      <div className='Partner-Card-Text'>
        <div className='Partner-Card-Text-Name'>
          <CenterText>
            <code>{partner.name}</code>
          </CenterText>
        </div>
        {partner.quote !== '-' && (
          <div className='Partner-Card-Text-Quote'>
            <CenterText>"{partner.quote}"</CenterText>
          </div>
        )}
      </div>
    </div>
  )
}
