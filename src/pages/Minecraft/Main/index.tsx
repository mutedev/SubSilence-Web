import React, { Fragment } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'
import MinecraftCard from '../../../components/MinecraftCard'
import './style.scss'

export default () => {
  return (
    <Fragment>
      <CenterText>
        <h1>
          Join our <code>Minecraft</code> server!
        </h1>
      </CenterText>
      <MinecraftCard url='mc.subsilence.nl:15973' version='1.16.4' />
      <Button center to='/minecraft/rules'>
        PLease read the rules
      </Button>
      <Button center to='/minecraft/map'>
        View the world map
      </Button>
      <Button center to='/'>
        Return to Home
      </Button>
    </Fragment>
  )
}
