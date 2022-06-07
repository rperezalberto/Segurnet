import React from 'react';
import estrellas from '../../assets/img/estrellas.png';

export const EstrellasHomeComponent = () => {
  return (
    <section className='estrellas container'>
        <div className='estrellas__content'>
            <img src={estrellas} />
            <h5>El 95% de nuestros clientes nos han calificado como una empresa de 5 estrellas en Google</h5>
        </div>
    </section>
  )
}
