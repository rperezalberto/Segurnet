import React from 'react';

export const SaludPolizaContent = () => {
    return (
        <section>
            <div className='pliza__con_title'>
                <span>2</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>Complete los datos del formulario de salud</h5>
                </div>
            </div>

            <div className='poliza__select'>

                <div className='poliza__slc_title poliza_pdg'>
                    <p>Información del titular:</p>
                </div>
                <div className='form_flx poliza_pdg form_info form_info-salud'>

                    <div className='form_cp form_cp-salud'>
                        <label htmlFor='txtNombre'>Nombre completo</label>
                        <input type='text' id='txtNombre' placeholder='Nombre' />
                    </div>

                    <div className='form_cp form_cp-salud'>
                        <label htmlFor='txtCedu'>Cédula</label>
                        <input type='text' id='txtCedu' placeholder='Cédula' />
                    </div>

                    <div className='form_cp form_cp-salud'>
                        <label htmlFor='txtNacim'>Fecha de nacimiento</label>
                        <input type='date' id='txtNacim' placeholder='Fecha de nacimiento' />
                    </div>

                    <div className='form_cp form_cp-salud'>
                        <label htmlFor='txtTele'>Téfono</label>
                        <input type='text' id='txtTele' placeholder='Téfono' />
                    </div>

                    <div className='form_cp form_cp-salud'>
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
