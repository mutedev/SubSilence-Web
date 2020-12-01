import React, { Fragment } from 'react'
import Button from '../../components/Button'
import CenterText from '../../components/CenterText'

export default () => {
  return (
    <Fragment>
      <CenterText>
        <h2>What is SubSilence</h2>
      </CenterText>
      <br />
      <p>
        SubSilence is a small but growing community of people all around the
        world. Most of the acticity takes place in the
        <code>
          <a href='/discord'> Discord </a>
        </code>
        server but we also do stuff in real life and create content for the web.
      </p>
      <br />
      <p>
        Some of our members also stream on
        <code>
          <a href='https://twitch.tv'> Twitch </a>
        </code>
        to try and get more members SubSilence is supposed to be a nice and
        comfortable place for everyone. That is why we have a few rules in
        place. This is only so that we can keep the bad stuff out of the
        community and have no worries about things like hate speech, racism
        along other stuff.
      </p>
      <br />
      <p>
        Currently there are a few services that SubSilence offers, some only to
        members of the
        <code>
          <a href='/discord'> SubSilence Discord Server </a>
        </code>
        as updates will be sent in a channel to keep everyone who uses the
        service up to date. Things such as the SubSilence Minecraft server are
        limited to only people who are active in the Discord server so we can
        better see if something could go wrong.
      </p>
      <br />
      <p>
        Charmy is the Discord bot we created for the SubSilence Discord Server.
        The bot will mkae things like moderating specific channels a lot easier.
        The bot also features the verification system that we use to make sure
        we do not get raided. For more information about Charmy you can visit
        her
        <code>
          <a href='/charmy'> webpage </a>
        </code>
      </p>
      <br />
      <p>
        Everything that is related to SubSilence is something that we made
        ourselves. This costs quite a bit of money sometimes. That is why we
        will accept donations. Every penny of these donations help us to keep
        hosting the website, charmy, the miencraft server among a lot of other
        things.
      </p>
      <Button center to='/'>
        Return to Home
      </Button>
    </Fragment>
  )
}
