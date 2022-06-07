import React from 'react';
import servPersonales from '../../assets/img/servPersonales.png';

export const ServiciosHomeComponent = () => {
    return (
        <section className='servicios'>
            <div className='content_title'>
                <h3>Nuestros Servicios</h3>
            </div>
            <div className='card container'>
                <div className='card__cont_title'>
                    <div>
                        <h4>Para ti, tenemos las coberturas más completas y atractivas proporcionándote <span className='txtSegu'>LOS MENORES COSTOS.</span></h4>
                    </div>

                    <p className='card__info'>Más que un servicio de simple intermediación, somos un aliado efectivo, dedicándonos a conocer a fondo tus metas.</p>
                    <div className='card__cont'>
                        <div className='card__subtitle'>
                            <p><span className='txtSegu'>---</span>SEGUROS DE VEHÍCULOS</p>
                            <p><span className='txtSegu'>---</span>SEGUROS DE SALUD</p>
                            <p><span className='txtSegu'>---</span>SEGUROS DE VIDA</p>
                        </div>

                        <div>
                            <p><span className='txtSegu'>---</span>SEGUROS DE PROPIEDADES</p>
                            <p><span className='txtSegu'>---</span>SEGUROS DE VIAJES</p>
                        </div>

                    </div>
                </div>


                <div>
                    <img src={servPersonales} />
                </div>

            </div>
        </section>
    )
}
