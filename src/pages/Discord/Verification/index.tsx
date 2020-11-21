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
        server. This is has to be <code>government approved</code>. In the same
        image there must be a piece of paper with your{' '}
        <code>full Discord Tag</code> (name#0000) You can cover up all other
        information except for <code>the date of birth</code>. Images that have
        been digitally modified will not be accepted. Verification may be{' '}
        <code>skipped</code> if the user comes from a different server that one
        of the moderators is in that also enforces this kind of verification.
        <br />
        After verification you can clarify wether you want to be able to see
        certain NSFW channels. If you decide to see the NSFW channels you will
        always have the NSFW general and NSFW art channel. U moderator can give
        you specific roles to get access to other channels. these channels may
        include: <code>Traps</code> and <code>E-Roleplay</code>.
      </CenterText>
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
