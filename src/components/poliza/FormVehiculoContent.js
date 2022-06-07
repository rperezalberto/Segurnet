import React from 'react'

export const FormVehiculoContent = () => {
    return (
        <section>
            <div className='pliza__con_title'>
                <span>2</span>
                <div className='poliza__content'>
                    <hr />
                    <h5>Complete los datos del formulario de vehículo</h5>
                </div>
            </div>

            <div className='poliza__select'>
                <div className='poliza_pdg'>
                    <div className='poliza__slc_title'>
                        <p>Datos del vehículo:</p>
                    </div>

                    <div className='form_flx'>

                        <div className='form_cp'>
                            <label htmlFor='tipoVehi'>Tipo de vehículo</label>
                            <select id='tipoVehi'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoSegu'>Tipo de seguro</label>
                            <select id='tipoSegu'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoMarca'>Marca</label>
                            <select id='tipoMarca'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoModelo'>Modelo</label>
                            <select id='tipoModelo'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoAno'>Año</label>
                            <input type='text' id='tipoAno' placeholder='000' />
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoValorVehi'>Valor del vehículo</label>
                            <input type='text' id='tipoValorVehi' placeholder='$' />
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoUso'>Uso del vehículo</label>
                            <select id='tipoUso'>
                                <option>Seleccionar</option>
                            </select>
                        </div>

                        <div className='form_cp'>
                            <label htmlFor='tipoEqui'>Equipamientos</label>
                            <select id='tipoEqui'>
                                <option>Seleccionar</option>
                            </select>
                        </div>
                    </div>
                </div>

                    <div className='poliza__slc_title poliza_pdg'>
                        <p>Envíar la información a:</p>
                    </div>
                <div className='form_flx poliza_pdg form_info'>

                    <div className='form_cp'>
                        <label htmlFor='txtNombre'>Nombre completo</label>
                        <input type='text' id='txtNombre' placeholder='Nombre' />
                    </div>

                    <div className='form_cp'>
                        <label htmlFor='txtTelf'>Teléfono</label>
                        <input type='text' id='txtTelf' placeholder='Teléfono' />
                    </div>

                    <div className='form_cp'>
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
