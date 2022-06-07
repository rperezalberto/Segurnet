import React from 'react'

export const PropiedadesPolizaComponent = () => {
    return (
        <section>
            <div className='pliza__con_title'>
                <span>2</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>Complete los datos del formulario de propiedad</h5>
                </div>
            </div>

            <div className='poliza__select'>
                <div className='poliza_pdg'>
                    <div className='poliza__slc_title'>
                        <p>Información del titular:</p>
                    </div>

                    <div className='form_flx poliza_pdg form_info form_info-propiedades '>

                        <div className='form_cp form_cp-titular'>
                            <label htmlFor='txtNombre'>Nombre completo</label>
                            <input type='text' id='txtNombre' placeholder='Nombre' />
                        </div>

                        <div className='form_cp form_cp-titular'>
                            <label htmlFor='txtDireccion'>Direccion</label>
                            <input type='text' id='txtDireccion' placeholder='Nombre' />
                        </div>

                        <div className='form_cp form_cp-titular'>
                            <label>Giro del negocio</label>
                            <div className='form__radio'>
                                <input type='radio' name='negocio' id='ngCom' />
                                <label htmlFor='ngCom'>Comercial</label>
                                <input type='radio' name='negocio' id='ngIndr' />
                                <label htmlFor='ngIndr'>Industrial</label>
                                <input type='radio' name='negocio' id='ngServ' />
                                <label htmlFor='ngServ'>Sevicios</label>
                            </div>
                        </div>
                    </div>

                    <div className='form_flx poliza_pdg form_info form_info-propiedades '>
                        <div className='form_cp form_cp-estado'>
                            <label>Estado</label>
                            <div className='form__radio'>
                                <input type='radio' name='estado' id='estPro' />
                                <label htmlFor='estPro'>Propietario</label>
                                <input type='radio' name='estado' id='estAlqu' />
                                <label htmlFor='estAlqu'>Alquilado</label>
                            </div>
                        </div>

                        <div className='form_cp form_cp-estado'>
                            <label htmlFor='tipoConst'>Tipo de construccion</label>
                            <select id='tipoConst'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp form_cp-estado'>
                            <label htmlFor='txtPro'>Valor total de la propiedad</label>
                            <input type='text' id='txtPro' placeholder='$' />
                        </div>
                    </div>

                    <div className='form_flx poliza_pdg form_info form_info-propiedades '>

                        <div className='form_cp form_cp-equipos'>
                            <label htmlFor='txtMerExt'>Valor total de las mercancías / existencia</label>
                            <input type='text' id='txtMerExt' placeholder='$' />
                        </div>

                        <div className='form_cp form_cp-equipos'>
                            <label htmlFor='txtVloMue'>Valor total del mobiliario / muebles</label>
                            <input type='text' id='txtVloMue' placeholder='$' />
                        </div>

                        <div className='form_cp form_cp-equipos'>
                            <label htmlFor='txtMknEqui'>Valor total en máquinas y equipos</label>
                            <input type='text' id='txtMknEqui' placeholder='$' />
                        </div>
                    </div>

                    <div className='form_flx poliza_pdg form_info form_info-propiedades '>
                        
                    <div className='form_cp form_cp-info'>
                        <label htmlFor='txtTele'>Téfono</label>
                        <input type='text' id='txtTele' placeholder='Téfono' />
                    </div>
                    
                    <div className='form_cp form_cp-info'>
                        <label htmlFor='txtCorreo'>Correo</label>
                        <input type='email' id='txtCorreo' placeholder='Correo' />
                    </div>
                    </div>

                </div>


                <div className='form-coment poliza_pdg'>
                    <div className='form_cp form_cp-coment'>
                        <label htmlFor='txtCmentario'>Comentarios <br />
                            <small>*Opcional - especificar debajo si desea alguna Aseguradora en particular.</small>
                        </label>
                        <textarea id='txtCmentario' placeholder='Escribir comentario...'></textarea>
                    </div>

                    <div className='form_btn'>
                        <button>Enviar</button>
                    </div>
                </div>


                {/* </div> */}
            </div>
        </section>
    )
}
