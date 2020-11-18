import React from 'react'
import Button from '../../../components/Button'
import CenterText from '../../../components/CenterText'
import NotFoundImage from '../../../assets/404.gif'

import '../style.scss';

export default () => (
  <CenterText>
    <CenterText>Oops! That page doesn't exist</CenterText>
    <img className='Image' src={NotFoundImage} />
    <Button center to='/'>
      Return to Home
    </Button>
  </CenterText>
)
