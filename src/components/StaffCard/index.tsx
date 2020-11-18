import React, { useEffect, useState } from 'react'
import CenterText from '../CenterText'
import type Props from './interface'

import './style.scss'

export default ({ staffMember, role, width }: Props) => {
  const widthStyle = { width }
  const colorStyle = { color: role.color }

  const [img, setImg] = useState('')

  useEffect(() => {
    setImg(staffMember.img)
  }, [img])

  return (
    <div className='StaffMember-Card' style={widthStyle}>
      <div className='StaffMember-Card-Img'>
        <img
          src={img}
          alt={`${staffMember.discordName} their profile picture`}
        />
      </div>
      <div className='StaffMember-Card-Text'>
        <div className='StaffMember-Card-Text-Name'>
          <CenterText>
            <code>{staffMember.name}</code>
          </CenterText>
        </div>
        {staffMember.quote !== '-' && (
          <div className='StaffMember-Card-Text-Quote'>
            <CenterText>"{staffMember.quote}"</CenterText>
          </div>
        )}
        <div className='StaffMember-Card-Text-Role' style={colorStyle}>
          <CenterText>{role.name}</CenterText>
        </div>
        <div className='StaffMember-Card-Text-Tag'>
          <CenterText>{staffMember.discordName}</CenterText>
        </div>
      </div>
    </div>
  )
}
