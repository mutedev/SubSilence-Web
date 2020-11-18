import React, { Fragment } from 'react'
import Button from '../../../components/Button'
import PartnerCard from '../../../components/PartnerCard'
import CenterText from '../../../components/CenterText'
import type Partner from './interface'
import partners from './partners'
import './style.scss'

export default () => {
  return (
    <Fragment>
      <section>
        <CenterText>
          <h1 style={{ color: '#7289DA' }}>Partners</h1>
        </CenterText>
        <div className='Card-Parent'>
          {partners.map((partner: Partner, index: number) => (
            <PartnerCard partner={partner} key={index} width={300} />
          ))}
        </div>
      </section>

      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
