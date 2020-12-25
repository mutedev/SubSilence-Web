import React, { Fragment } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'
import MinecraftCard from '../../../components/MinecraftCard'
import TextSection from '../../../components/TextSection'

export default () => {
  return (
    <Fragment>
      <TextSection>
        <CenterText>
          <h1>
            Join our <code>Minecraft</code> server!
          </h1>
        </CenterText>
        <MinecraftCard url='mc.subsilence.nl:15973' version='1.16.4' />
      </TextSection>
      <TextSection>
        <CenterText>
          <h2>
            Read the <code>Rules</code>
          </h2>
        </CenterText>
        <Button center to='/minecraft/rules'>
          View the rules
        </Button>
      </TextSection>
      <TextSection>
        <CenterText>
          <h2>
            Check out the <code>World Map</code>
          </h2>
        </CenterText>
        <Button center to='/minecraft/map'>
          View the world map
        </Button>
      </TextSection>
      <TextSection>
        <CenterText>
          <h2>
            We have <code>Clans</code>!
          </h2>
        </CenterText>
        <Button center to='/minecraft/clans'>
          View the Clans
        </Button>
      </TextSection>
      <TextSection>
        <Button center to='/'>
          Return to Home
        </Button>
      </TextSection>
    </Fragment>
  )
}
