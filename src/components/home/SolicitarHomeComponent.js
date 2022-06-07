import React from 'react';
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
                <img src={web} />
                <p className='card__title'>Página Web</p>
                <p className='card__subtitle'>Ofrecemos el servicio de cotización de Póliza en linea de una manera facil y rapida. Tan solo tienes que clicar en el botón "Cotiza ahora"</p>
                <div className='card_link'>
                  <button>Cotiza ahora</button>
                </div>
            </div>

            <div className='card__content pl'>
                <img src={llamanos} />
                <p className='card__title'>Llamada, correo o Whatsapp</p>
                <p className='card__subtitle'>Estamos disponibles a través de distintas plataformas para brindarte el mejor de los servicios. Anímate a escribirnos a <spanp className="txtSegu" type="email">info@segurnet.com.do</spanp> igualmente puedes llamarnos al: <spanp className="txtSegu">809-620-2524</spanp> o mejor escríbenos por <spanp className="txtSegu">whatsApp!</spanp></p>
            </div>

            <div className='card__content'>
                <img className='segurnet' src={segurnet} />
                <p className='card__title'>Visitándonos en nuestra oficina</p>
                <p className='card__subtitle'>También puedes visitarnos en nuestra oficina ubicada en la <spanp className="txtSegu">Calle Viriato Fiallo #24, Santo Domingo.</spanp> Horario: <spanp className="txtSegu">Lunes a Viernes de 8:00 a.m. a 5:30 p.m. y los Sábados de 8:00 a.m. a 12:30 p.m.</spanp></p>
                <div className='card_link'>
                    <button type='sutmib'>Ver mapa</button>
                </div>
            </div>

        </div>

        
    </section>
  )
}

