import React, { Fragment } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'

export default () => {
  return (
    <Fragment>
      <CenterText>
        Since this server has <code>NSFW</code> channels, you will need to
        verify that you are 18+. You can do this by sending an image of any of
        your valid ID to a <code>moderator / administrator</code> of this
        server; This is has to be <code>government approved</code>. In the same
        image there must be a piece of paper with your{' '}
        <code>full Discord Tag</code> (name#0000) You can cover up all other
        information except for <code>the date of birth</code>. Images that have
        been digitally modified will not be accepted
      </CenterText>
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
