import React, { Fragment } from 'react'
import { FooterComponent } from '../components/FooterComponent'
import { HeaderComponent } from '../components/HeaderComponent'
import { PolizaCotizaComponent } from '../components/poliza/PolizaCotizaComponent'

export const PolizaView = () => {
  return (
    <Fragment>
          <PolizaCotizaComponent/>
    </Fragment>
  )
}
