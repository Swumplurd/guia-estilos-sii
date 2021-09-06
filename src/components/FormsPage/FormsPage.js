import React from "react";
import "./FormsPage.css";

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
                                <div className="input-group mb-3">
                                    <label htmlFor="nombre" className="input-group-text icon" id="basic-addon1"><i
                                            className="far fa-user"></i></label>
                                    <input id="nombre" name="nombrea" type="text" className="formulario" placeholder="Nombre"
                                        aria-label="Nombre" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="apellido_p" className="input-group-text icon" id="basic-addon1"><i
                                            className="far fa-user"></i></label>
                                    <input id="apellido_p" name="apellido_p" type="text" className="formulario"
                                        placeholder="Apellido Paterno" aria-label="Nombre"
                                        aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="apellido_m" className="input-group-text icon" id="basic-addon1"><i
                                            className="far fa-user"></i></label>
                                    <input id="apellido_m" name="apellido_m" type="text" className="formulario"
                                        placeholder="Apellido Materno" aria-label="Nombre"
                                        aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="direccion" className="input-group-text icon" id="basic-addon1"><i
                                            className="fas fa-map-marked-alt"></i></label>
                                    <input id="direccion" name="direccion" type="text" className="formulario"
                                        placeholder="Direccion" aria-label="Nombre" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label htmlFor="usuario" className="input-group-text icon" id="basic-addon1"><i
                                            className="fas fa-user-tag"></i></label>
                                    <input id="usuario" name="usuario" type="text" className="formulario"
                                        placeholder="Usuario" aria-label="Nombre" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="correo" className="input-group-text icon" id="basic-addon1"><i
                                            className="far fa-envelope"></i></label>
                                    <input id="correo" name="correo" type="text" className="formulario" placeholder="Correo"
                                        aria-label="Nombre" aria-describedby="basic-addon1"/>
                                </div>

                                <div className="input-group mb-3">
                                    <label htmlFor="contraseña" className="input-group-text icon" id="basic-addon1"><i
                                            className="fas fa-lock"></i></label>
                                    <input id="contraseña" name="contraseña" type="text" className="formulario"
                                        placeholder="Contraseña" aria-label="Nombre" aria-describedby="basic-addon1"/>
                                </div>

                                <div className="input-group mb-3">
                                    <label htmlFor="c_contraseña" className="input-group-text icon" id="basic-addon1"><i
                                            className="fas fa-lock"></i></label>
                                    <input id="c_contraseña" name="c_contraseña" type="text" className="formulario"
                                        placeholder="Confirma Contraseña" aria-label="Nombre"
                                        aria-describedby="basic-addon1"/>
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
                <pre className="py-2">
                    <code>
                    &lt;div class="container"&gt;
                        &lt;div class="row"&gt;
                            &lt;div class="col-lg-10 col-xl-9 mx-auto"&gt;             
                
                              &lt;h3 class="text-center mt-2 mb-5 fw-light fs-5"&gt;Registrate&lt;/h3&gt;         
                                
                
                                &lt;form&gt;
                
                                    &lt;div class="form-content"&gt;
                                        &lt;div class="row"&gt;
                                            &lt;div class="col-md-6"&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="nombre" class="input-group-text icon" id="basic-addon1"&gt;&lt;i class="far fa-user"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="nombre" name="nombre"type="text" class="formulario" placeholder="Nombre" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="apellido_p" class="input-group-text icon" id="basic-addon1"&gt;&lt;i class="far fa-user"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="apellido_p" name="apellido_p"type="text" class="formulario" placeholder="Apellido Paterno" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="apellido_m" class="input-group-text icon" id="basic-addon1"&gt;&lt;i&gt; class="far fa-user"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="apellido_m" name="apellido_m"type="text" class="formulario" placeholder="Apellido Materno" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="direccion" class="input-group-text icon" id="basic-addon1"&gt;&lt;i&gt; class="fas fa-map-marked-alt"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="direccion" name="direccion" type="text" class="formulario" placeholder="Direccion" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                                &lt;/div&gt;
                                            &lt;div class="col-md-6"&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="usuario" class="input-group-text icon" id="basic-addon1"&gt;&lt;i&gt; class="fas fa-user-tag"&gt;&lt;/i&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="usuario" name="usuario" type="text" class="formulario" placeholder="Usuario" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="correo" class="input-group-text icon" id="basic-addon1"&gt;&lt;i&gt; class="far fa-envelope"&gt;&lt;/i&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="correo" name="correo" type="text" class="formulario" placeholder="Correo" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                
                                            &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="contraseña" class="input-group-text icon" id="basic-addon1"&gt;&lt;i class="fas fa-lock"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="contraseña" name="contraseña" type="text" class="formulario" placeholder="Contraseña" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                
                                                &lt;div class="input-group mb-3"&gt;
                                                    &lt;label for="c_contraseña" class="input-group-text icon" id="basic-addon1"&gt;&lt;i class="fas fa-lock"&gt;&lt;/i&gt;&lt;/label&gt;
                                                    &lt;input id="c_contraseña" name="c_contraseña"type="text" class="formulario" placeholder="Confirma Contraseña" aria-label="Nombre"
                                                        aria-describedby="basic-addon1"&gt;
                                                &lt;/div&gt;
                                            &lt;/div&gt;
                                        &lt;/div&gt;
                                        &lt;div class="form-floating mb-3 form-group"&gt;
                                            &lt;button type="button" class="mb-5 btn btn-primary"&gt;
                                                &lt;p class="texto-blanco"&gt;Registrarse&lt;/p&gt;
                                            &lt;/button&gt;
                                        &lt;/div&gt;
                                    &lt;/div&gt;
                
                
                
                
                                &lt;/form&gt;
                
                
                
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
    
                    </code>
                </pre>

            </div>
        </div>
    </div>
        </>
    );
};
