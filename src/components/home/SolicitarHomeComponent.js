import React from 'react';
import {Link} from 'react-router-dom';
import web from '../../assets/img/web.png';
import llamanos from '../../assets/img/llamanos.png';
import segurnet from '../../assets/img/segurnet.png';

export const SolicitarHomeComponent = () => {
  return (
    <section className='solicitar container'>
        <div className='content_title'>
            <h3 className='solicitar__title'>¿Cómo solicitar una Póliza de Seguros con nosotros?</h3>
        </div>

        <div className='solicitar__card'>
            <div className='card__content'>
                <img src={web} alt='Web'/>
                <p className='card__title'>Página Web</p>
                <p className='card__subtitle'>Ofrecemos el servicio de cotización de Póliza en linea de una manera facil y rapida. Tan solo tienes que clicar en el botón "Cotiza ahora"</p>
                <div className='card_link'>
                  <Link to='./cotiza'>Cotiza ahora</Link>
                </div>
            </div>

            <div className='card__content pl'>
                <img src={llamanos} alt='Llamanos'/>
                <p className='card__title'>Llamada, correo o Whatsapp</p>
                <p className='card__subtitle'>Estamos disponibles a través de distintas plataformas para brindarte el mejor de los servicios. Anímate a escribirnos a <spanp className="txtSegu" type="email">info@segurnet.com.do</spanp> igualmente puedes llamarnos al: <spanp className="txtSegu">809-620-2524</spanp> o mejor escríbenos por <spanp className="txtSegu">whatsApp!</spanp></p>
            </div>

            <div className='card__content'>
                <img className='segurnet' src={segurnet} alt='Segurnet'/>
                <p className='card__title'>Visitándonos en nuestra oficina</p>
                <p className='card__subtitle'>También puedes visitarnos en nuestra oficina ubicada en la <spanp className="txtSegu">Calle Viriato Fiallo #24, Santo Domingo.</spanp> Horario: <spanp className="txtSegu">Lunes a Viernes de 8:00 a.m. a 5:30 p.m. y los Sábados de 8:00 a.m. a 12:30 p.m.</spanp></p>
                <div className='card_link'>
                    <a href="https://www.google.com/maps/place/SEGURNET/@18.4704778,-69.9478584,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf891590277269:0x20770620ef407958!8m2!3d18.4704727!4d-69.9456697?shorturl=1" target="_blank">Ver mapa</a>
                </div>
            </div>

        </div>

        
    </section>
  )
}

