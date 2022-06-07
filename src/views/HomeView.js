import React, {Fragment} from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { CoberturaHomeComponent } from '../components/home/CoberturaHomeComponent'
import { CotizarHomeComponent } from '../components/home/CotizarHomeComponent'
import { ServiciosHomeComponent } from '../components/home/ServiciosHomeComponent'
import { SolicitarHomeComponent } from '../components/home/SolicitarHomeComponent'
import { SolucionesHomeComponent } from '../components/home/SolucionesHomeComponent'
import { EstrellasHomeComponent } from '../components/home/EstrellasHomeComponent'
import { FooterComponent } from '../components/FooterComponent'

export const HomeView = () => {
    return (
        <Fragment>
            <CoberturaHomeComponent />
            <CotizarHomeComponent />
            <div className='blackAll'></div>
            <hr class="line"></hr>
            <SolicitarHomeComponent />
            <hr class="line"></hr>
            <ServiciosHomeComponent/>
            <SolucionesHomeComponent/>
            <EstrellasHomeComponent />
        </Fragment>
    )
}
