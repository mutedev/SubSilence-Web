import React, { Fragment, useState } from 'react'
import { isBrowser, isMobile } from 'react-device-detect'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import FlexContainer from '../../../components/FlexContainer'
import CenterText from '../../../components/CenterText'
import './style.scss'

export default () => {
  const url = 'http://mcmap.subsilence.nl/'
  const [fullscreen, setFullscreen] = useState(false)

  const fullscreenToggle = () => {
    const localStorageItem = 'mapFullscreenNotificationSeen'

    if (localStorage.getItem(localStorageItem) !== 'true') {
      alert('Click anywhere outside the map to leave big view')

      localStorage.setItem(localStorageItem, 'true')
    }

    setFullscreen(!fullscreen)
  }

  return (
    <FlexContainer>
      {isBrowser && (
        <Fragment>
          <section
            onClick={() => setFullscreen(false)}
            className={`Minecraft-Map${fullscreen ? ' Fullscreen' : ''}`}
          >
            <iframe src={url} title='SubSilence Minecraft Map' />
          </section>
          <Button onClick={fullscreenToggle} center>
            View bigger
          </Button>
          <Button to={url} center>
            View source
          </Button>
        </Fragment>
      )}
      {isMobile && (
        <Card>
          <CenterText>
            <h1>Oh no!</h1>
          </CenterText>
          <CenterText>
            <h2>The Minecraft map is only visible on desktop.</h2>
          </CenterText>
          <CenterText>
            <h2>Want to see it anyway?</h2>
          </CenterText>
          <Button to={url} center>
            Yes, show me
          </Button>
        </Card>
      )}
      <Button center to='/minecraft'>
        Back
      </Button>
    </FlexContainer>
  )
}
