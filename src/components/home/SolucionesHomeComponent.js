import React from 'react';
import servCorporativo from '../../assets/img/servCorporativo.png';

export const SolucionesHomeComponent = () => {
    return (
        <section className='soluciones  '>
            <div className='container'>
                <div className='soluciones__cont_ cont'>
                    <h4>Para ti, cliente corporativo, diseñamos <span className='txtBold'>las mejores soluciones y productos </span> a la medida, que satisfacen las necesidades <spna className="txtSegu">PERSONALIZADAS DE TU NEGOCIO</spna></h4>
                    <p>y proteger tanto a la empresa, como también lo más importante que hay en ella, sus empleados.</p>
                </div>

                <div className='soluciones__p'>
                    <p><span className='txtSegu'>---</span> PEQUEÑAS Y MEDIANAS EMPRESAS (PYMES)</p>
                    <p><span className='txtSegu'>---</span> GRUPOS EMPRESARIALES, INDUSTRIAS Y MULTINACIONALES</p>
                </div>

                <div className='card_soluciones'>
                    <img  src={servCorporativo}/>
                    <div className='card_content'>
                        <hr className='hr' />
                        <h4><spna className='txtBold'>Desarollamos</spna> productos de seguros para <span className='txtBold txtSegu'> LA VENTA EN GRANDES VOLÚMENES</span>.</h4>
                        <p className='card_content--p'>Como complemento a tus servicios principales, incrementando el nivel de satisfacción de tus clientes. Ponemos además a tu disposición nuestra propia plataforma digital para la gestión y administración de estos servicios.</p>
                        <p className='txtBold'><span className='txtSegu'>---</span> SEGUROS MASIVOS</p>
                        <p className='txtBold'><span className='txtSegu'>---</span> CANALES ALTERNOS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
