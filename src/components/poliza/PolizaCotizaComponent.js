import React, { useState } from 'react';
import car from '../../assets/img/car.svg';
import health from '../../assets/img/health.svg';
import travel from '../../assets/img/travel.svg';
import family from '../../assets/img/family.svg';
import home from '../../assets/img/home.svg';
import { FormVehiculoContent } from './FormVehiculoContent';
import { SaludPolizaContent } from './SaludPolizaContent';
import { ViajeCotizacionComponent } from './ViajeCotizacionComponent';
import { VidaPolizaComponent } from './VidaPolizaComponent';
import { PropiedadesPolizaComponent } from './PropiedadesPolizaComponent';



export const PolizaCotizaComponent = () => {

    const [checks, setChecks] = useState('');
    const [active, setActive] = useState(false);

    const checkRadio = (e) => {
        const dat = e.target.value;
        setChecks(dat);




        // console.log(checks);
    }


    return (
        <section className='poliza container'>
            <h2>COTIZAR PÓLIZA</h2>
            <div className='pliza__con_title'>
                <span>1</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>¿Cúal tipo póliza desea cotizar?</h5>
                </div>
            </div>


            <form>
                <div className='poliza__select'>

                    <div className='poliza_cont'>
                        <label htmlFor="car" className='poliza__select_content'>
                            <input type="radio" name='check' id="car" value='car' onChange={(e) => checkRadio(e)} />
                            <div className='poliza_input'>
                                <img src={car} alt-text='Carro'/>
                                <div className='poliza__title'>
                                    <p>
                                        <label htmlFor="car">Vehiculos</label>
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="health" className='poliza__select_content'>
                            <input type="radio" name='check' id="health" value='health' onChange={(e) => checkRadio(e)} />
                            <div className='poliza_input'>
                                <img src={health} alt-text='Salud'/>
                                <div className='poliza__title'>
                                    <p>
                                        <label htmlFor="health">Salud</label>
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="travel" className='poliza__select_content'>
                            <input type="radio" name='check' id="travel" value='travel' onChange={(e) => checkRadio(e)} />
                            <div className='poliza_input'>
                                <img src={travel} alt-text='Viajes'/>
                                <div className='poliza__title'>
                                    <p>
                                        <label htmlFor="travel">Viajes</label>
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="family" className='poliza__select_content'>
                            <input type="radio" name='check' id="family" value='family' onChange={(e) => checkRadio(e)} />
                            <div className='poliza_input'>
                                <img src={family} alt-text='Familia'/>
                                <div className='poliza__title'>
                                    <p>
                                        <label htmlFor="family">Vida</label>
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="home" className='poliza__select_content'>
                            <input type="radio" name='check' id="home" value='home' onChange={(e) => checkRadio(e)} />
                            <div className='poliza_input'>
                                <img src={home} alt-text='Propiedades'/>
                                <div className='poliza__title'>
                                    <p>
                                        <label htmlFor="home">Propiedades</label>
                                    </p>
                                </div>
                            </div>
                        </label>



                    </div>
                </div>
            </form>

            {
                (checks === 'car') ? <FormVehiculoContent /> : (checks === 'health') ? <SaludPolizaContent /> :
                    (checks === 'travel') ? <ViajeCotizacionComponent /> : (checks === 'family') ? <VidaPolizaComponent /> : (checks === 'home') ? <PropiedadesPolizaComponent />
                        : <Titleformulario />
            }
        </section>
    )
}

const Titleformulario = () => {
    return (
        <div className='pliza__con_title'>
            <span>2</span>
            <div className='poliza__content'>
                <hr />
                <h5>Complete los datos del formulario</h5>
            </div>
        </div>
    )
}