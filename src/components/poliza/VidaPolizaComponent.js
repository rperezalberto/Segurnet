import React from 'react'

export const VidaPolizaComponent = () => {
    return (
        <section>
            <div className='pliza__con_title'>
                <span>2</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>Complete los datos del formulario de vida</h5>
                </div>
            </div>

            <div className='poliza__select'>
                <div className='poliza_pdg'>
                    <div className='poliza__slc_title'>
                        <p>Información del titular:</p>
                    </div>

                    <div className='form_flx poliza_pdg form_info form_info-vida'>
                        <div className='form_cp form_cp-vida'>
                            <label htmlFor='txtNombre'>Nombre completo</label>
                            <input type='text' id='txtNombre' placeholder='Nombre' />
                        </div>

                        <div className='form_cp form_cp-vida'>
                            <label htmlFor='txtCedu'>Cédula</label>
                            <input type='text' id='txtCedu' placeholder='Cédula' />
                        </div>

                        <div className='form_cp form_cp-vida'>
                            <label htmlFor='txtNacim'>Fecha de nacimiento</label>
                            <input type='date' id='txtNacim' placeholder='Fecha de nacimiento' />
                        </div>

                        <div className='form_cp form_cp-vida'>
                            <label>Fumador</label>
                            <div className='form__radio'>
                                <input type='radio' name='fumar' id='txtRSi' />
                                <label htmlFor='txtRSi'>Si</label>
                                <input type='radio' name='fumar' id='txtRNo' />
                                <label htmlFor='txtRNo'>No</label>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className='frm_line' />


                <div className='poliza__slc_title poliza_pdg'>
                    <p>Información de poliza:</p>
                </div>

                <div className='form_flx poliza_pdg form_info form_info-vida'>

                    <div className='form_cp form_cp-vida form_cp-vida-plz'>
                        <label>Fumador</label>
                        <div className='form__radio'>
                            <input type='radio' name='moneda' id='MonRSi' />
                            <label htmlFor='MonRSi'>Peso</label>
                            <input type='radio' name='moneda' id='MonRNo' />
                            <label htmlFor='MonRNo'>Dolar</label>
                        </div>
                    </div>

                    <div className='form_cp form_cp-vida form_cp-vida-plz'>
                        <label>Con ahorro o sin ahorro</label>
                        <div className='form__radio'>
                            <input type='radio' name='ahorro' id='ahoRSi' />
                            <label htmlFor='ahoRSi'>Si</label>
                            <input type='radio' name='ahorro' id='ahoRNo' />
                            <label htmlFor='ahoRNo'>No</label>
                        </div>
                    </div>

                    <div className='form_cp form_cp-vida form_cp-vida-plz'>
                        <label htmlFor='txtSuma'>Suma asegurada</label>
                        <input type='text' id='txtSuma' placeholder='$' />
                    </div>

                </div>

                <hr className='frm_line' />

                <div className='poliza__slc_title poliza_pdg'>
                    <p>Información de contacto:</p>
                </div>


                <div className='form_flx poliza_pdg form_info form_info-vida'>
                    <div className='form_cp form_cp-vida form_cp-vida-cmt'>
                        <label htmlFor='txtTele'>Téfono</label>
                        <input type='text' id='txtTele' placeholder='Téfono' />
                    </div>

                    <div className='form_cp form_cp-vida form_cp-vida-cmt'>
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
