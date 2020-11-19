import React from 'react'
import Button from '../../../components/Button'
import CenterText from '../../../components/CenterText'
import ForbiddenImage from '../../../assets/403.gif'

import '../style.scss'

export default () => (
  <CenterText>
    <CenterText>Woah! That's forbidden!</CenterText>
    <img className='Image' src={ForbiddenImage} />
    <Button center to='/'>
      Return to Home
    </Button>
  </CenterText>
)
