import React from 'react';
import bg from '../assets/img/logo15a.svg';
import headphone from '../assets/img/headphone.png';
import bg_menu from '../assets/img/bx-menu.svg';
import {shoMenu} from '../assets/js/script';
import { Link, NavLink } from 'react-router-dom';


export const HeaderComponent = () => {
    return (
        //   Header
        <header className='header container'>
            <div className='header__content'>
                <Link to="/"><img src={bg} className="header_bg" alt-text='Segurnet'/></Link>

                <div className='header__content_menu'>
                    <div className='header_bg_menu' onClick={shoMenu}>
                        <img src={bg_menu} alt-text='Menu' />
                    </div>

                </div>
                {/* End header__content_menu */}
            </div>

            <nav className='navbar'>
                <ul>
                    <li className='navbar__txtBold'><Link to='/'>Inicio |</Link></li>
                    <li><Link to='/'>Conocenos</Link></li>
                    <li><Link to='/'>Servicios</Link></li>
                    <li><NavLink to='/cotiza'>Cotizar Poliza</NavLink></li>
                    <li><Link to='/'>Contacto</Link></li>
                </ul>

                <div className='header__content_headphone'>
                    <img src={headphone} alt-text='headphone'/>
                    <div className='asistencia'>
                        <p className='asistencia__title'>¿Necesitas asistencia?</p>
                        <p className='asistencia__phone'>809-620-2524</p>
                    </div>
                </div>
            </nav>
        </header>
        // End  Header
    )
}
