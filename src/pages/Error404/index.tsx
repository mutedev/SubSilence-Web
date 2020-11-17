import React from 'react'
import Button from '../../components/Button'
import CenterText from '../../components/CenterText'

export default () => (
  <CenterText>
    <CenterText>Oops! That page doesn't exist</CenterText>
    <Button center to='/'>
      Return to Home
    </Button>
  </CenterText>
)
