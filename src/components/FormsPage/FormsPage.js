import React from "react";
import "./FormsPage.css";

export const FormsPage = () => {
    return (
        <>
            <div className="container mt-5 animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="display-4">Formularios</h1>
                        <hr />
                        <p className="lead">
                            Formulario creado a partir de estilos con ayuda de
                            Bootstrap 4
                        </p>
                        <h2>Formulario de registro</h2>
                        <p className="lead">
                            Formulario que nos permite el llenado de datos para
                            un registro
                        </p>
                        <hr />
                    </div>
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="col-md-10 text-center">
                            <h3
                                className="mt-2 mb-3 fw-light fs-4"
                                align="center"
                            >
                                Registrate
                            </h3>
                        </div>

                        <form>
                            <div className="form-content">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 text-center">
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="nombre"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="far fa-user"></i>
                                            </label>
                                            <input
                                                id="nombre"
                                                name="nombre"
                                                type="text"
                                                className="formulario"
                                                placeholder="Nombre"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="apellido_p"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="far fa-user"></i>
                                            </label>
                                            <input
                                                id="apellido_p"
                                                name="apellido_p"
                                                type="text"
                                                className="formulario"
                                                placeholder="Apellido Paterno"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="apellido_m"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="far fa-user"></i>
                                            </label>
                                            <input
                                                id="apellido_m"
                                                name="apellido_m"
                                                type="text"
                                                className="formulario"
                                                placeholder="Apellido Materno"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="direccion"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="fas fa-map-marked-alt"></i>
                                            </label>
                                            <input
                                                id="direccion"
                                                name="direccion"
                                                type="text"
                                                className="formulario"
                                                placeholder="Direccion"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center">
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="usuario"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="fas fa-user-tag"></i>
                                            </label>
                                            <input
                                                id="usuario"
                                                name="usuario"
                                                type="text"
                                                className="formulario"
                                                placeholder="Usuario"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="correo"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="far fa-envelope"></i>
                                            </label>
                                            <input
                                                id="correo"
                                                name="correo"
                                                type="text"
                                                className="formulario"
                                                placeholder="Correo"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>

                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="contraseña"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="fas fa-lock"></i>
                                            </label>
                                            <input
                                                id="contraseña"
                                                name="contraseña"
                                                type="text"
                                                className="formulario"
                                                placeholder="Contraseña"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>

                                        <div className="input-group mb-3">
                                            <label
                                                htmlFor="c_contraseña"
                                                className="input-group-text icon"
                                                id="basic-addon1"
                                            >
                                                <i className="fas fa-lock"></i>
                                            </label>
                                            <input
                                                id="c_contraseña"
                                                name="c_contraseña"
                                                type="text"
                                                className="formulario"
                                                placeholder="Confirma Contraseña"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 form-group">
                                    <button
                                        type="button"
                                        className="mb-5 btn btn-primary"
                                    >
                                        <p className="texto-blanco">
                                            Registrarse
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-10">
                        <h2>Formulario de registro</h2>
                        <p className="lead">
                            Codigo HTML para realizar el formulario
                        </p>
                        <hr />
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-10">
                            <div className="border border-dark mx-2">
                                <pre className="chroma">
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">form</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;form-content&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;row justify-content-center&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;col-md-6 text-center&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;nombre&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;far fa-user&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;nombre&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;nombre&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>{" "}
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">&#34;Nombre&#34;</span>
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Nombre&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_p&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;far fa-user&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_p&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_p&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Apellido Paterno&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">&#34;Nombre&#34;</span>
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_m&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;far fa-user&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_m&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;apellido_m&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Apellido Materno&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">&#34;Nombre&#34;</span>
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;direccion&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;fas fa-map-marked-alt&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;direccion&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;direccion&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Direccion&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Nombre&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;col-md-6
                                        justify-content-center&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;usuario&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;fas fa-user-tag&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;usuario&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;usuario&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Usuario&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Nombre&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;correo&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;far fa-envelope&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;correo&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;correo&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>{" "}
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">&#34;Correo&#34;</span>
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Nombre&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;contraseña&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;fas fa-lock&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;contraseña&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;contraseña&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Contraseña&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Nombre&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group mb-3&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">label</span>{" "}
                                    <span className="na">for</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;c_contraseña&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;input-group-text icon&#34;
                                    </span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;&lt;</span>
                                    <span className="nt">i</span>
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;fas fa-lock&#34;
                                    </span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">i</span>
                                    <span className="p">&gt;&lt;/</span>
                                    <span className="nt">label</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">input</span>{" "}
                                    <span className="na">id</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;c_contraseña&#34;
                                    </span>{" "}
                                    <span className="na">name</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;c_contraseña&#34;
                                    </span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;text&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;formulario&#34;
                                    </span>
                                    <span className="na">placeholder</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;Confirma Contraseña&#34;
                                    </span>{" "}
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">label</span>
                                    <span className="o">=</span>
                                    <span className="s">&#34;Nombre&#34;</span>
                                    <span className="na">aria</span>
                                    <span className="err">-</span>
                                    <span className="na">describedby</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;basic-addon1&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">div</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;form-floating mb-3 form-group&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br /> <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">button</span>{" "}
                                    <span className="na">type</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;button&#34;
                                    </span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;mb-5 btn btn-primary&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;</span>
                                    <span className="nt">p</span>{" "}
                                    <span className="na">class</span>
                                    <span className="o">=</span>
                                    <span className="s">
                                        &#34;texto-blanco&#34;
                                    </span>
                                    <span className="p">&gt;</span>
                                    <span className="nx">Registrarse</span>
                                    <span className="p">&lt;/</span>
                                    <span className="nt">p</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">button</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">div</span>
                                    <span className="p">&gt;</span>
                                    <br />
                                    <span className="p">&lt;/</span>
                                    <span className="nt">form</span>
                                    <span className="p">&gt;</span>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h2>Formulario de registro</h2>
                        <p className="lead">
                            Codigo CSS para realizar el formulario
                        </p>
                        <hr />
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-10">
                            <div className="border border-dark mx-2">
                                <pre className="chroma">
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">formulario</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">width</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">280</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">outline</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">none</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">height</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">44</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">bottom</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">14</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border-radius</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">22</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">display</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">flex</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">justify-content</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">center</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">padding</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>{" "}
                                    <span className="mi">18</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#def</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-shadow</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">3</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="kc">black</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="kp">-webkit-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Safari/Chrome, other WebKit */
                                    </span>
                                    <br />
                                    <span className="kp">-moz-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Firefox, other Gecko */
                                    </span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">/* Opera/IE 8+ */</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">icon</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">width</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">40</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-shadow</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">3</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="kc">black</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">height</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">44</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">bottom</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">14</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border-radius</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">22</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">display</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">flex</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">justify-content</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">center</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="kp">-webkit-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Safari/Chrome, other WebKit */
                                    </span>
                                    <br />
                                    <span className="kp">-moz-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Firefox, other Gecko */
                                    </span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">/* Opera/IE 8+ */</span>
                                    <br />
                                    <span className="k">padding</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>{" "}
                                    <span className="mi">18</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#def</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#073379</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">formulario</span>
                                    <span className="p">:</span>
                                    <span className="nd">hover</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#ffff</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">@</span>
                                    <span className="k">media</span>{" "}
                                    <span className="nt">only</span>{" "}
                                    <span className="nt">screen</span>{" "}
                                    <span className="nt">and</span>{" "}
                                    <span className="o">(</span>
                                    <span className="nt">max-width</span>
                                    <span className="o">:</span>{" "}
                                    <span className="nt">360px</span>
                                    <span className="o">)</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">formulario</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">width</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">180</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">outline</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">none</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">height</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">44</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">bottom</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">14</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border-radius</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">22</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">display</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">flex</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">justify-content</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">center</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">padding</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>{" "}
                                    <span className="mi">18</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#def</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-shadow</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">3</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="kc">black</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="kp">-webkit-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Safari/Chrome, other WebKit */
                                    </span>
                                    <br />
                                    <span className="kp">-moz-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Firefox, other Gecko */
                                    </span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">/* Opera/IE 8+ */</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">icon</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">width</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">40</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-shadow</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">3</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="mi">0</span>
                                    <span className="kt">px</span>{" "}
                                    <span className="kc">black</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">height</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">44</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">bottom</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">14</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">border-radius</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">22</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">display</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">flex</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">justify-content</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">center</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="kp">-webkit-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Safari/Chrome, other WebKit */
                                    </span>
                                    <br />
                                    <span className="kp">-moz-</span>
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">
                                        /* Firefox, other Gecko */
                                    </span>
                                    <br />
                                    <span className="k">box-sizing</span>
                                    <span className="p">:</span>{" "}
                                    <span className="kc">border-box</span>
                                    <span className="p">;</span>{" "}
                                    <span className="c">/* Opera/IE 8+ */</span>
                                    <br />
                                    <span className="k">padding</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mi">0</span>{" "}
                                    <span className="mi">18</span>
                                    <span className="kt">px</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#def</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="k">color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#073379</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">.</span>
                                    <span className="nc">formulario</span>
                                    <span className="p">:</span>
                                    <span className="nd">hover</span>{" "}
                                    <span className="p">{"{"}</span>
                                    <br />
                                    <span className="k">background-color</span>
                                    <span className="p">:</span>{" "}
                                    <span className="mh">#ffff</span>
                                    <span className="p">;</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                    <br />
                                    <span className="p">{"}"}</span>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
