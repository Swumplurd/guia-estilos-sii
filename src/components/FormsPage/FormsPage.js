import React from 'react'
import './FormsPage.css'

export const FormsPage = () => {
    return (
        <>
            <div className="container">
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">

                <h3 className="text-center mt-2 mb-5 fw-light fs-5">Registrate</h3>


                <form>

                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Nombre" id="#" className="mb-4  formulario" type="text" />

                                </div>
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Apellido Paterno" id="#" className="mb-4  formulario" type="text" />

                                </div>
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Apellido Materno" id="#" className="mb-4  formulario" type="text" />

                                </div>
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Direccion" id="#" className="mb-4  formulario" type="text" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Usuario" id="#" className="mb-4  formulario" type="text" />

                                </div>
                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Correo" id="#" className="mb-4  formulario" type="text" />

                                </div>

                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Contraseña" id="#" className="mb-4  formulario" type="text" />

                                </div>

                                <div className="form-floating mb-3 form-group">

                                    <input placeholder="Confirmar Contraseña" id="#" className="mb-4  formulario"
                                        type="text" />

                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-3 form-group">
                            <button type="button" className="mb-5 btn btn-primary">
                                <p className="texto-blanco">Registrarse</p>
                            </button>
                        </div>
                    </div>




                </form>



            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <textarea name="" id="" cols="130" rows="12">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
        
                            <h3 className="text-center mt-2 mb-5 fw-light fs-5">Registrate</h3>
        
                        
                        <form>
        
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Nombre" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Apellido Paterno" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Apellido Materno" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Direccion" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Usuario" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Correo" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
        
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Contraseña" id="#" className="mb-4  formulario" type="text" />
        
                                        </div>
        
                                        <div className="form-floating mb-3 form-group">
        
                                            <input placeholder="Confirmar Contraseña" id="#" className="mb-4  formulario"
                                                type="text" />
        
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 form-group">
                                    <button type="button" className="mb-5 btn btn-primary"><p className="texto-blanco">Registrarse</p></button>
                                </div>
                            </div>
        
        
        
        
                        </form>
        
        
        
                    </div>
                </div>
            </div>
    
        </textarea>

            </div>
        </div>
    </div>
        </>
    )
}
