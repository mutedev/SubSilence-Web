import React, { Fragment } from 'react'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import CenterText from '../../../components/CenterText'
import TextSection from '../../../components/TextSection'
import clans from './clans'
import './style.scss'

export default () => {
  return (
    <Fragment>
      <CenterText>
        <h1>
          Active <code>Clans</code>
        </h1>
      </CenterText>
      <Card>
        <table>
          <tbody>
            {clans.map((rule: string, index: number) => (
              <tr className='Rule' key={index}>
                <td className='Index'>
                  <code>[ {index + 1} ]</code>
                </td>
                <td className='Text'>{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <TextSection>
        <CenterText>
          <h1>
            <code>Join</code> a Clan!
          </h1>
        </CenterText>
        <CenterText>
          To join a clan, ask the members of the clan in our Discord server!
        </CenterText>
      </TextSection>
      <Button center to='/minecraft'>
        Back
      </Button>
    </Fragment>
  )
}
