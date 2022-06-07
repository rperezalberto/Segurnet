import React from 'react'

export const ViajeCotizacionComponent = () => {
    return (
        <section>
            <div className='pliza__con_title'>
                <span>2</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>Complete los datos del formulario de viajes</h5>
                </div>
            </div>

            <div className='poliza__select'>

                <div className='poliza__slc_title poliza_pdg'>
                    <p>Información del titular:</p>
                </div>
                <div className='form_flx poliza_pdg form_info form_info-viaje'>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtNombre'>Nombre completo</label>
                        <input type='text' id='txtNombre' placeholder='Nombre' />
                    </div>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtNacim'>Fecha de nacimiento</label>
                        <input type='date' id='txtNacim' placeholder='Fecha de nacimiento' />
                    </div>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='tipoDestino'>Destino</label>
                        <select id='tipoDestino'>
                            <option>Seleccionar</option>
                        </select>
                    </div>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtSalida'>Fecha de salida</label>
                        <input type='date' id='txtSalida' placeholder='Fecha de salida' />
                    </div>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtRetorno'>Fecha de retorno</label>
                        <input type='date' id='txtRetorno' placeholder='Fecha de salida' />
                    </div>


                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtTele'>Téfono</label>
                        <input type='text' id='txtTele' placeholder='Téfono' />
                    </div>

                    <div className='form_cp form_cp-viaje'>
                        <label htmlFor='txtCorreo'>Correo</label>
                        <input type='email' id='txtCorreo' placeholder='Correo' />
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
