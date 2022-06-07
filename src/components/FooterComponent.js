import React from 'react';
import { Link } from 'react-router-dom';
import SegurnetBlanco from '../assets/img/SegurnetBlanco.png';
import UAF002187D39 from '../assets/img/UAF002187D39.png';
import fb from '../assets/img/fb.svg';
import ig from '../assets/img/ig.svg';


export const FooterComponent = () => {
    return (
        <footer className='footer'>
            <div className='footer_cont container'>
                <nav className='navbar__footer navbar'>
                    <ul>
                        <li className='navbar__txtBold'><Link to='/'>Inicio</Link></li>
                        <li><Link to='#'>Conocenos</Link></li>
                        <li><Link to='#'>Servicios</Link></li>
                        <li><Link to='/cotiza'>Cotizar Poliza</Link></li>
                        <li><Link to='#'>Contacto</Link></li>
                    </ul>
                </nav>

                <div className='footer_card'>
                    <div className='footer_card_info'>
                        <p>Dirección: Calle Viriato Fiallo #24, Ensanche Julieta, Distrito Nacional. Santo Domingo, República Dominicana</p>
                        <p>Teléfono: <a href='tel:+1-809-620-2524'>809-620-2524</a></p>
                    </div>

                    <div className='footer_seguNet'>
                        <img src={SegurnetBlanco} />
                    </div>

                    <div className='footer_cont_social'>
                        <div className='footer__social'>
                            <h4>SEGURNETRD</h4>
                            <Link to='#'><img src={fb} /></Link>
                            <Link to='#'><img src={ig} /></Link>
                        </div>
                        <div className='footer__uaf'>
                            <img src={UAF002187D39} />
                        </div>
                    </div>
                </div>
            </div>



            <div className='footer__term container'>
                <div className='footer__nav'>
                    <nav>
                        <ul>
                            <li><Link to='#'>Términos y condiciones</Link></li>
                            <li><Link to='#'>Política de privacidad y uso de datos personales</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer__copy'>
                    <p>&copy; 2021 Segurnet - Seguros & Reaseguros</p>
                </div>
            </div>
        </footer>
    )
}
