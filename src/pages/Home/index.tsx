import React, { Fragment } from 'react'
import CenterText from '../../components/CenterText'
import Button from '../../components/Button'

import img from '../../../public/logo.png'

import './style.scss'

export default () => {
  return (
    <Fragment>
      {/* Header Image and substitle */}
      <CenterText>
        <img src={img} alt='The SubSilence Logo' />
      </CenterText>
      <hr />
      <br />
      <br />
      <h3></h3>
      {/* Start Button List */}
      <table className='HomeIndex'>
        <tbody>
          <tr>
            <td>
              <CenterText>
                <h2>Check out</h2>
                <h1>
                  Our <code>Discord Community</code>
                </h1>
              </CenterText>
              <Button center to='/Discord'>
                More Info
              </Button>
            </td>
            <td>
              <CenterText>
                <h2>Read more</h2>
                <h1>
                  About <code>SubSilence</code>
                </h1>
              </CenterText>
              <Button center to='/About'>
                Learn more
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <CenterText>
                <h2>Play on</h2>
                <h1>
                  Our <code>Minecraft Server</code>
                </h1>
              </CenterText>
              <Button center to='/Minecraft'>
                More Info
              </Button>
            </td>
            <td>
              <CenterText>
                <h2>How to use</h2>
                <h1>
                  <code>Charmy</code>
                </h1>
              </CenterText>
              <Button center to='/Charmy'>
                Learn more
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Button center to='/'>
        Return to Home
      </Button>
    </Fragment>
  )
}
