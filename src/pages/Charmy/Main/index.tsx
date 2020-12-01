import React, { Fragment, useEffect, useState } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'
import charmy from '../../../assets/charmy.png'
import './style.scss'

export default () => {
  const [img, setImg] = useState('')

  useEffect(() => {
    setImg(charmy)
  }, [])

  return (
    <Fragment>
      <CenterText>
        <img className='Charmy-Img' src={img} />
        <h1 className='Charmy-Text'>
          Our self developed <code>Discord Bot</code>
        </h1>
      </CenterText>
      <Button center to='/charmy/commands'>
        Check the commands
      </Button>
      <Button center to='/'>
        Return to Home
      </Button>
    </Fragment>
  )
}
