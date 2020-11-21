import React, { Fragment } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'
import './style.scss'

export default () => {
  return (
    <Fragment>
      <table className='Discord'>
        <tbody>
          <tr>
            <td>
              <CenterText>
                <h1>
                  Join our <code>Server</code>
                </h1>
              </CenterText>
              <Button center to='http://join.subsilence.nl'>
                Discord invite link
              </Button>
            </td>
            <td>
              <CenterText>
                <h1>
                  And get <code>Verified</code>!
                </h1>
              </CenterText>
              <Button center to='/discord/verify'>
                Learn more
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <CenterText>
                <h2>
                  View all our <code>Staff</code>
                </h2>
              </CenterText>
              <Button center to='/discord/staff'>
                View the Staff
              </Button>
            </td>
            <td>
              <CenterText>
                <h2>
                  Check out our <code>Roles</code>
                </h2>
              </CenterText>
              <Button center to='/discord/roles'>
                Check out the Roles
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <CenterText>
                <h2>
                  Please also read the <code>Rules</code>
                </h2>
              </CenterText>
              <Button center to='/discord/rules'>
                Read the rules
              </Button>
            </td>
            <td>
              <CenterText>
                <h2>
                  Partner <code>Servers</code>
                </h2>
              </CenterText>
              <Button center to='/discord/partners'>
                View our Partners
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
