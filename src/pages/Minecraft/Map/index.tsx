import React, { Fragment } from 'react'
import { isBrowser, isMobile } from 'react-device-detect'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import FlexContainer from '../../../components/FlexContainer'
import CenterText from '../../../components/CenterText'
import './style.scss'

export default () => {
  const minHeight = 650
  const url = 'http://mcmap.subsilence.nl/'

  const bigWindow = window.innerHeight >= minHeight

  return (
    <FlexContainer>
      {isBrowser && bigWindow && (
        <section className='Minecraft-Map'>
          <iframe src={url} title='SubSilence Minecraft Map' />
        </section>
      )}
      {isMobile ||
        (!bigWindow && (
          <Card>
            <CenterText>
              <h1>Oh no!</h1>
            </CenterText>
            <CenterText>
              {isMobile && (
                <h2>The Minecraft map is only visible on desktop.</h2>
              )}
              {!bigWindow && (
                <h2>
                  The Minecraft map is only visible on bigger screens. Please
                  make your screen bigger.
                </h2>
              )}
            </CenterText>
            <CenterText>
              <h2>Want to see it anyway?</h2>
            </CenterText>
            <Button to={url} center>
              Yes, show me
            </Button>
          </Card>
        ))}
      <Button center to='/minecraft'>
        Back
      </Button>
    </FlexContainer>
  )
}
